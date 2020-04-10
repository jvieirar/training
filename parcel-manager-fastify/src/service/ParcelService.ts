import ParcelRepository from '../dao/ParcelRepository';

export default class ParcelService {
  private readonly parcelRepository: ParcelRepository;

  constructor() {
    this.parcelRepository = new ParcelRepository();
  }

  findAllParcels() {
    return this.parcelRepository.findAll();
  }

  getOneParcelByExternalId(externalId: string) {
    return this.parcelRepository.findOneByExternalId(externalId);
  }
}
