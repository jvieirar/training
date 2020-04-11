import { PrismaClient, parcel, parcelUpdateInput, parcelCreateInput } from '@prisma/client';
import ParcelRequestDto from '../dto/ParcelRequestDto';

export default class ParcelService {
  // prismaClient acts as our DAO, not need to create our own
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    return await this.prisma.parcel.findMany();
  }
  async findOneByExternalId(externalId: string): Promise<parcel | null> {
    const parcel = await this.prisma.parcel.findOne({ where: { external_id: externalId } });
    if (!parcel) {
      const error: ErrorDto = { statusCode: 404, error: 'Not found', message: `Parcel '${externalId}' not found` };
      throw error;
    } else {
      return parcel;
    }
  }
  async create(data: ParcelRequestDto) {
    return await this.prisma.parcel.create({
      data: getInputValuesFromData(data),
    });
  }
  async update(parcel: parcel | null, data: Omit<ParcelRequestDto, 'externalId'>) {
    return await this.prisma.parcel.update({
      where: { external_id: parcel?.external_id },
      data: getUpdateValuesFromData(data),
    });
  }
}

function getUpdateValuesFromData(data: Partial<ParcelRequestDto>): parcelUpdateInput {
  const values: parcelUpdateInput = { type: data.type, status: data.status || 'BOOKED' };
  if (data.agentId) {
    values.agent = { connect: { id: data.agentId } };
  }
  if (data.carrierId) {
    values.carrier = { connect: { id: data.carrierId } };
  }
  if (data.retailerId) {
    values.retailer = { connect: { id: data.retailerId } };
  }
  if (data.userId) {
    values.user = { connect: { id: data.userId } };
  }
  return values;
}

function getInputValuesFromData(data: ParcelRequestDto): parcelCreateInput {
  const values: parcelCreateInput = { external_id: data.externalId, type: data.type, status: data.status || 'BOOKED' };
  if (data.agentId) {
    values.agent = { connect: { id: data.agentId } };
  }
  if (data.carrierId) {
    values.carrier = { connect: { id: data.carrierId } };
  }
  if (data.retailerId) {
    values.retailer = { connect: { id: data.retailerId } };
  }
  if (data.userId) {
    values.user = { connect: { id: data.userId } };
  }
  return values;
}
