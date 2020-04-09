const fastify = require('fastify')();

// fastify.get('/', async (request, reply) => {
//   return { hello: 'world' };
// });

fastify.register(require('./controller/ParcelController'), { prefix: '/parcel' });

const start = async () => {
  try {
    await fastify.listen(6000);
    console.log('listening on port 6000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
