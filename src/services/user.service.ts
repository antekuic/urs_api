import { FastifyInstance } from "fastify";
import {verifyHash} from "./crypto.service";


class User {
  constructor (private f: FastifyInstance) {} 

  public async loginUser(email: string, password: string) {
    // find user in database
    let user = await this.f.prisma.user.findFirst({
      where: {
        email
      }
    });

    if(!user)
      throw new Error('no_user');

    // make hash from  provided password
    let test_hash = await verifyHash(password, user.salt);

    // check if hashes are same
    if(user.hash !== test_hash)
      throw new Error('wrong_password');

    let {hash, salt, ...other} = user;
    // elswhere return user data
    return other;
  }
}

export default User;