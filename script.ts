import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {

  /*
  create  
  const post = await prisma.post.create({
    where: { id: 2 },
    data: {
      title: 'Prisma makes databases easy',
      // "Nested write"
      author: {
        connect: { email: 'sarah@prisma.io' },
      },
    },
  });
  */

  const post = await prisma.post.update({
    where: { id: 2 },
    data: { published: true },
  });
  console.log(post);

  const allUsers = await prisma.user.findMany({
    // JOIN relation
    include: { posts: true },
  });

  console.log(allUsers);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
