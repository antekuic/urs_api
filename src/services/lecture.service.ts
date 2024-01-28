import { FastifyInstance } from "fastify";
import { getRandomBytes } from "./crypto.service";


interface newLecture {
  name: string,
  user_id: number,
  class_id: string,
  start_date: string
}

interface closeLecture {
  id: number,
  end_date: string,
  user_id: number,
  class_id: string
}

class Lecture {
  constructor (private f: FastifyInstance) {} 

  public async create(data: newLecture) {

    let {name, user_id, class_id, start_date} = data;
    
    // generate salt
    let salt = await getRandomBytes(16);

    let new_lecture = await this.f.prisma.lecture.create({
      data: {
        name,
        user_id,
        class_id,
        start_date,
        salt
      }
    })

    return new_lecture;
  }

  // close lecture
  public async close(data: closeLecture) {
    let {id, end_date, user_id, class_id} = data;
    let updated_lecture = await this.f.prisma.lecture.update({
      data: {
        end_date
      },
      where: {
        id,
        end_date: null,
        start_date: {
          lt: new Date(end_date)
        },
        user_id,
        class_id
      }
    })

    if(!updated_lecture)
      throw new Error('Invalid lecture');

    return updated_lecture;
  }

  // check if lecture is valid
  public async isValid(lecture_id: number, class_id: string) {
    let lecture = await this.f.prisma.lecture.findFirst({
      where: {
        id: lecture_id,
        class_id
      }
    });

    if(!lecture || lecture.end_date)
      return false;

    return true;
  }
}

export default Lecture;