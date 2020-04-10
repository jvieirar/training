import ParcelService from '../service/ParcelService';
const parcelService = new ParcelService();
import fastify, { FastifyRequest, FastifyReply, FastifyError } from 'fastify';
import { ParcelRequestDto } from '../dto/ParcelRequestDto';
import { Server, IncomingMessage, ServerResponse } from 'http';

async function getAllParcels(request: any, reply: any) {
  console.log('getAllParcels');

  const parcels = await parcelService.findAllParcels();
  console.log(`Return ${parcels?.length} parcels`);

  return parcels;
}

async function getOneParcelByExternalId(request: FastifyRequest, reply: FastifyReply<any>) {
  const { externalId } = request.params;
  console.log(`getOneParcelByExternalId: '${externalId}'`);

  const parcel = await parcelService.getOneParcelByExternalId(externalId);

  if (!parcel) {
    const error: ErrorDto = { statusCode: 404, error: 'Not found', message: `Parcel '${externalId}' not found` };
    reply.status(404).send(error);
  } else {
    return parcel;
  }
}

async function createOneParcel({ body }: { body: ParcelRequestDto }, reply: any) {
  console.log({ boyd: body });
  return body;
}

module.exports = function (fastify: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>, opts: any, next: any) {
  // list parcels
  fastify.get('/list', getAllParcels);
  // get one parcel
  fastify.get('/:externalId', getOneParcelByExternalId);
  // create one parcel
  fastify.post<unknown, unknown, unknown, ParcelRequestDto>(
    '/',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            externalId: { type: 'string' },
            type: { type: 'string' },
            status: { type: 'string' },
            userId: { type: 'number' },
            agentId: { type: 'number' },
            retailerId: { type: 'number' },
            carrierId: { type: 'number' },
          },
          required: ['externalId', 'type'],
        },
      },
    },
    createOneParcel,
  );

  next();
};
