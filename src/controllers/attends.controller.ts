import type { User } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';
import { makeHash } from '../services/crypto.service';
import { createAttendRequest } from 'types/requests';


export async function create(request: FastifyRequest<createAttendRequest>, reply: FastifyReply) {
  
  const {body: {lecture_id, hash}, server: {service}} = request;
  
  // check if lecture is valid
  if(!(await service.lecture.isValid(lecture_id, request.class!.id)))
    return reply.status(404).send({message: 'Lecture has expired!'});

  // make data to string array
  let input = [request.class!.id, (request.user as User).id.toString(), lecture_id.toString()];
  // make hash from input data
  let test_hash = await makeHash(input, request.class!.salt);

  // verify hashes
  if(hash !== test_hash)
    return reply.status(404).send({message: 'Wrong data!'});

  // make attend
  let new_attend = await service.attend.create({user_id: (request.user as User).id, lecture_id: lecture_id})

  // response to user
  return reply.status(200).send({...new_attend});
}
