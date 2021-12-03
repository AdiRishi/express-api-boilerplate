import { Prisma } from '@prisma/client';
import prisma from '../utils/db';

export const getUser = async (userWhereInput: Prisma.UserWhereInput) => {
  return await prisma.user.findFirst({
    where: { ...userWhereInput },
  });
};

export const createUser = async (userCreateInput: Prisma.UserCreateInput) => {
  return await prisma.user.create({ data: userCreateInput });
};
