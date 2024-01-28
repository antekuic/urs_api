import fp from 'fastify-plugin';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import User from '../services/user.service';
import ClassRoom from '../services/class.service';
import Lecture from '../services/lecture.service';
import Attend from '../services/attend.service';

const servicePlugin: FastifyPluginAsync =  fp(async function servicePlugin(fastify: FastifyInstance) {

  const userService = new User(fastify);
  const classService = new ClassRoom(fastify);
  const lectureService = new Lecture(fastify);
  const attendService = new Attend(fastify);

  fastify.decorate('service', {user: userService, class: classService, lecture: lectureService, attend: attendService});

});

export default servicePlugin;

