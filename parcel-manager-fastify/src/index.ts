import fastify from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

const API_PREFIX = '/api/v1';

const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({});

server.register(require('./controller/ParcelController'), { prefix: `${API_PREFIX}/parcel` });

const start = async () => {
  try {
    await server.listen(6000, '0.0.0.0');
    console.log('listening on port 6000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
