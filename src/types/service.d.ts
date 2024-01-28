import { FastifyInstance } from "fastify";
import Attend from "services/attend.service";
import ClassRoom from "services/class.service";
import Lecture from "services/lecture.service";
import User from "services/user.service";

declare module 'fastify' {
  interface FastifyInstance {
    service: {
      user: User,
      class: ClassRoom,
      lecture: Lecture,
      attend: Attend
    }
  }
}
