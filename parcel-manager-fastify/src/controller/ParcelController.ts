import ParcelService from '../service/ParcelService';
const parcelService = new ParcelService();
import fastify, { FastifyRequest, FastifyReply, FastifyError } from 'fastify';
import ParcelRequestDto, { ParcelRequestDtoValidation, ParcelRequestUpdateDtoValidation } from '../dto/ParcelRequestDto';
import { Server, IncomingMessage, ServerResponse } from 'http';

async function getAllParcels(request: any, reply: any) {
  console.log('getAllParcels');

  const parcels = await parcelService.findAll();
  console.log(`Return ${parcels?.length} parcels`);

  return parcels;
}

async function getOneParcelByExternalId(request: FastifyRequest, reply: FastifyReply<any>) {
  const { externalId } = request.params;
  console.log(`getOneParcelByExternalId: '${externalId}'`);
  try {
    const parcel = await parcelService.findOneByExternalId(externalId);
    return parcel;
  } catch (error) {
    reply.status(404).send(error);
  }
}

async function createOneParcel({ body }: { body: ParcelRequestDto }, reply: any) {
  console.log({ body });
  return await parcelService.create(body);
}

async function updateOneParcel(request: { params: { externalId: string }; body: ParcelRequestDto }, reply: FastifyReply<any>) {
  // async function updateOneParcel({ body }: { body: ParcelRequestDto }, reply: any) {
  const { externalId } = request.params;
  const { body }: { body: ParcelRequestDto } = request;
  try {
    const parcel = await parcelService.findOneByExternalId(externalId);
    return await parcelService.update(parcel, body);
  } catch (error) {
    reply.status(404).send(error);
  }
}

async function getParcelEvents(request: { params: { externalId: string } }, reply: FastifyReply<any>) {
  const { externalId } = request.params;
  try {
    const parcel = await parcelService.findOneByExternalId(externalId);
    return await parcelService.getParcelEvents(parcel?.external_id || externalId);
  } catch (error) {
    reply.status(404).send(error);
  }
}

module.exports = function (fastify: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>, opts: any, next: any) {
  // list parcels
  fastify.get('/list', getAllParcels);

  // get one parcel
  fastify.get('/:externalId', getOneParcelByExternalId);

  // get parcel's events
  fastify.get('/:externalId/event/list', getParcelEvents);

  // create one parcel
  // <Query, Params, Headers, Body>
  fastify.post<unknown, unknown, unknown, ParcelRequestDto>(
    '/',
    {
      schema: {
        body: ParcelRequestDtoValidation,
      },
    },
    createOneParcel,
  );

  // update one parcel
  // <Query, Params, Headers, Body>
  fastify.patch<unknown, { externalId: string }, unknown, ParcelRequestDto>(
    '/:externalId',
    {
      schema: {
        body: ParcelRequestUpdateDtoValidation,
      },
    },
    updateOneParcel,
  );

  next();
};
