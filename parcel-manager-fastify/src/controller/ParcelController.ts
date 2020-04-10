import ParcelService from '../service/ParcelService';
const parcelService = new ParcelService();

async function getAllParcels(req: any, res: any) {
  console.log('getAllParcels');

  const parcels = await parcelService.findAllParcels();
  console.log(`Return ${parcels?.length} parcels`);

  return parcels;
}

module.exports = function (fastify: any, opts: any, next: any) {
  fastify.get('/', getAllParcels);
  next();
};
