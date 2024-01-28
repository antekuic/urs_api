import { FastifyRequest, FastifyReply } from 'fastify';
import { LoginRequest } from '../types/requests';

export async function login(request: FastifyRequest<LoginRequest>, reply: FastifyReply) {
  
  const {email, password} = request.body;
  const {auth, service: {user}} = request.server

  // try to login user
  let data = await user.loginUser(email, password);

  // make token
  let token = auth.generateToken(data);

  // response to user
  return reply.status(200).send({user: data, token: {type: 'Bearer', token}});
}