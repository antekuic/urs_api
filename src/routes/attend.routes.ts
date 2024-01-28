import { FastifyInstance } from "fastify";
import { create } from "../controllers/attends.controller";
import type { User } from "@prisma/client";
import { attendCreateScheme } from "../schema/attend.scheme";


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
  fastify.post('/attend/:id', {schema: attendCreateScheme, preHandler: async (req, reply, next) => {

    let {params, server: { service } } = req;
    let {role} = req.user as User;

    if(role !== 'STUDENT')
      return reply.status(404).send({message: 'You need to be student'});

    // assign class
    req.class = await service.class.get((params as any).id);

    next();

  }}, create);
  
}