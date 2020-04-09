import ParcelService from '../service/ParcelService';
const parcelService = new ParcelService();

async function getAllParcels(req: any, res: any) {
  const parcels = await parcelService.findAllParcels();
  return parcels;
}

module.exports = function (fastify: any, opts: any, next: any) {
  fastify.get('/', getAllParcels);
  next();
};
