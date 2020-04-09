module.exports = function (fastify, opts, next) {
  fastify.get('/', getAllParcels);
  next();
};

async function getAllParcels() {
  return [{ name: 'name1' }, { name: 'name2' }];
}
