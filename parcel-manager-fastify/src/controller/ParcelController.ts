import ParcelService from '../service/ParcelService';
const parcelService = new ParcelService();

async function getAllParcels() {
  const parcels = await parcelService.findAllParcels();
  console.log({ parcels });

  return parcels;
}

module.exports = function (fastify: any, opts: any, next: any) {
  fastify.get('/', getAllParcels);
  next();
};
