import { FastifyInstance } from "fastify";


class ClassRoom {
  constructor (private f: FastifyInstance) {} 

  public async get(id: string) {
    // find user in database
    let classroom = await this.f.prisma.classroom.findFirst({
      where: {
        id
      }
    });

    if(!classroom)
      throw new Error('Invalid class ID');

    return classroom;
  }
}

export default ClassRoom;