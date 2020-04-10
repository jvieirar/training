import { PrismaClient } from '@prisma/client';
// or const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

export default class ParcelRepository {
  async findAll() {
    return await prisma.parcel.findMany();
  }
  async findOneByExternalId(externalId: string) {
    return await prisma.parcel.findOne({ where: { external_id: externalId } });
  }
}
