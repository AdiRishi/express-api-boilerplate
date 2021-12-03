import { PrismaClient } from '@prisma/client';
import config from '../config';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: config.dbConnectionUrl,
    },
  },
});

export type PrismaTransactionClient = Omit<
  PrismaClient,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>;

export default prisma;
