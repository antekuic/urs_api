import { PrismaClient } from '@prisma/client';
import {getRandomBytes} from '../src/services/crypto.service';
import { randomUUID } from 'crypto';

const prisma = new PrismaClient();

async function main() {
  /*let password = 'test';
  let salt = '648e37558d28f5bdb0acfa54eff7aae2a1ea093441b6e6ae469932a2e7445572';

  let hash = await cryptoService(password, salt);

  await prisma.user.createMany({
    data: [
    {
      email: 'admin',
      hash,
      salt,
      name: 'admin',
      surname: 'admin',
      role: 'PROFESSOR'
    },
    {
      email: 'student',
      hash,
      salt,
      name: 'student',
      surname: 'student',
      role: 'STUDENT'
    },
  ]
  })*/

  let salt = await getRandomBytes(32)

  await prisma.classroom.create({
    data: {
      id: randomUUID(),
      label: 'A101',
      salt
    }
  })

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
