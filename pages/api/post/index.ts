import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  console.log('xxxxxxxx');
  console.log(session);
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: 'phuchiss.su@gmail.com' } },
    },
  });
  res.json(result);
}