import fp from 'fastify-plugin';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import Auth from '../services/auth.service';

const authPlugin: FastifyPluginAsync =  fp(async function authPlugin(fastify: FastifyInstance) {
  const auth = new Auth(fastify);

  fastify.decorate('auth', auth);

});

export default authPlugin;

