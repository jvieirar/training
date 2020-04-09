import { PrismaClient } from '@prisma/client';
// or const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export default class ParcelRepository {
  findAllParcels = async () => {
    return await prisma.parcel.findMany();
  };
}
