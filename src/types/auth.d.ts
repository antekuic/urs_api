import { FastifyInstance } from "fastify";
import Auth from "services/auth.service";

declare module 'fastify' {
  interface FastifyInstance {
    auth: Auth;
  }
}
