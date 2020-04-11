import fastify from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import RetailerService from '../service/RetailerService';

const retailerService = new RetailerService();

async function getAllRetailers() {
  console.log('getAllRetailers');

  const retailers = await retailerService.findAll();
  console.log(`Return ${retailers?.length} retailers`);

  return retailers;
}

module.exports = function (fastify: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse>, opts: any, next: any) {
  // list retailers
  fastify.get('/list', getAllRetailers);

  next();
};
