import type { User } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';
import { closeLectureRequest, createLectureRequest } from 'types/requests';


export async function create(request: FastifyRequest<createLectureRequest>, reply: FastifyReply) {
  
  const {user, body: {name, start_date, class_id}, server: {service}} = request;
  // create new lecture from data
  let lecture = await service.lecture.create({name, start_date, class_id, user_id: (user as User).id})
  // response to user
  return reply.status(200).send({...lecture});
}

export async function close(request: FastifyRequest<closeLectureRequest>, reply: FastifyReply) {
  
  const {user, body: {end_date, class_id, id}, server: {service}} = request;
  // create new lecture from data
  let lecture = await service.lecture.close({end_date, class_id, id, user_id: (user as User).id})
  // response to user
  return reply.status(200).send({...lecture});
}