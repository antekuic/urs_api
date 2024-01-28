import fastify from 'fastify'
import fastifyEnv from '@fastify/env';
import fastifyCors from '@fastify/cors';
import fastifyCompress from '@fastify/compress';
import fastifyHelmet from '@fastify/helmet';
import fastifyJwt from '@fastify/jwt';

import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import envConfig from './lib/env.config';
import corsConfig from './config/cors.config';
import loggerConfig from './config/logger.config';
import compressConfig from './config/compress.config';
import prismaPlugin from './plugins/prisma.plugin';
import helmetConfig from './config/helmet.config';
import { swaggerConfig } from './config/swagger.config';


import { authorizedSchema, messageSchema, paramUUIDScheme, tokenSchema } from './schema/common.schema';
import { attendSchema, lectureSchema, userSchema } from './schema/models.schema';
import authPlugin from './plugins/auth.plugin';
import servicePlugin from './plugins/service.plugin';
import instancePlugin from './plugins/instance.plugin';
import userRoutes from './routes/user.routes';
import lectureRoutes from './routes/lecture.routes';
import attendRoutes from './routes/attend.routes';

const main = async () => {
  const app = fastify({ logger: loggerConfig });

  // Now we setup our app, plugins and such
  await app.register(fastifyEnv, envConfig);
  await app.register(fastifyCors, corsConfig);
  await app.register(fastifyCompress, compressConfig);
  await app.register(fastifyHelmet, helmetConfig);
  await app.register(prismaPlugin);
  await app.register(fastifyJwt, {secret: 'test'});
  await app.register(authPlugin);
  await app.register(servicePlugin);
  await app.register(instancePlugin);
  
  // Json Schemas
  app.addSchema(paramUUIDScheme);
  app.addSchema(messageSchema);
  app.addSchema(tokenSchema);
  app.addSchema(authorizedSchema);
  app.addSchema(userSchema);
  app.addSchema(lectureSchema);
  app.addSchema(attendSchema);

  // Swagger Docs
  if (app.config.ENABLE_SWAGGER) {
    await app.register(fastifySwagger, swaggerConfig);
    await app.register(fastifySwaggerUi, {
      routePrefix: '/docs',
    });
  }

  // API Endpoint routes
  await app.register(async api => {
    api.register(userRoutes, { prefix: "/users" });
    api.register(lectureRoutes, {prefix: "/lectures"});
    api.register(attendRoutes, {prefix: '/attends'});
  }, { prefix: "/api/v1" });

  return app;
};

export { main };

