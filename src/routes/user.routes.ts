import { login } from "../controllers/users.controller";
import { FastifyInstance } from "fastify";
import { loginSchema } from "../schema/login.schema";

export default async function (fastify: FastifyInstance) {

  // route for logging
  fastify.post('/login', {schema: loginSchema}, login);
}