import fp from 'fastify-plugin';
import { FastifyInstance, FastifyPluginAsync } from 'fastify';

const instancePlugin: FastifyPluginAsync =  fp(async function instancePlugin(fastify: FastifyInstance) {

  // make objects as null
  //fastify.decorateRequest('user', null);
  fastify.decorateRequest('class', null);

});

export default instancePlugin;