// service for authorization

import { FastifyInstance } from "fastify/types/instance";
import type { User } from '@prisma/client'

class Auth {
  constructor(private f: FastifyInstance) {}

  public generateToken(payload: Omit<User, 'hash' | 'salt'>) {
    return this.f.jwt.sign(payload);
  }

  public verifyToken(token: string):Omit<User, 'hash' | 'salt'>  {
    let payload = this.f.jwt.verify(token) as Omit<User, 'hash' | 'salt'>;

    return payload;
  }
}

export default Auth;