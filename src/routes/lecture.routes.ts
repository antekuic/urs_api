import { create, close } from "../controllers/lectures.controller";
import { FastifyInstance } from "fastify";
import type { User } from "@prisma/client";
import { closeLectureScheme, createLectureSchema } from "../schema/lecture.schema";


export default async function (fastify: FastifyInstance) {

  const {auth} = fastify;

  fastify.addHook("preHandler", async (request, reply) => {
    const {headers} = request;

    if(!headers["x-auth-token"])
      return reply.status(404).send({message: 'Not authorized!'});

    let user = auth.verifyToken(headers["x-auth-token"] as string);

    request.user = user;
  })


  // route for logging
  fastify.post('/create', {schema: createLectureSchema, preHandler: (req, reply, next) => {
    let {role} = req.user as User;

    if(role !== 'PROFESSOR')
      return reply.status(404).send({message: 'You need to be professor'});

    next();

  }}, create);

  fastify.put('/close', {schema: closeLectureScheme}, close);


}