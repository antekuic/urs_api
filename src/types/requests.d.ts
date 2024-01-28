/*
* Some types used mostly to extract data from:
* - Request parameters
* - POST body
* - Query string
*/

import type { User, Classroom } from "@prisma/client";
import type { FastifyRequest } from "fastify";


type LoginRequest = {
  Body: {
    email: string;
    password: string;
  }
}

type createLectureRequest = {
  Body: {
    name: string,
    start_date: string,
    class_id: string
  }
}

type closeLectureRequest = {
  Body: {
    id: number,
    end_date: string,
    class_id: string
  }
}

type createAttendRequest = {
  Body: {
    lecture_id: number,
    hash: string
  }
  Params: {
    id: string
  }
}

declare module 'fastify' {
  interface FastifyRequest {
    user?: User,
    class?: Classroom
  }
}
