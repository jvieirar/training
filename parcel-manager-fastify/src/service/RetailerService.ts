import { PrismaClient, retailer } from '@prisma/client';

export default class RetailerService {
  // prismaClient acts as our DAO, not need to create our own
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll(): Promise<retailer[]> {
    return await this.prisma.retailer.findMany();
  }
}
