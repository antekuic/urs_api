import { FastifyInstance } from "fastify";

interface createAttend {
  user_id: number,
  lecture_id: number
}
class Attend {
  constructor (private f: FastifyInstance) {} 

  public async create(data: createAttend) {
    // find user in database
    let attend = await this.f.prisma.attends.create({
      data: {
        user_id: data.user_id,
        lecture_id: data.lecture_id
      }
    });

    return attend;
  }
}

export default Attend;