export default interface ParcelRequestDto {
  externalId: string;
  type: string;
  status?: string;
  userId?: number;
  agentId?: number;
  retailerId?: number;
  carrierId?: number;
}

export const ParcelRequestDtoValidation = {
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
};

export const ParcelRequestUpdateDtoValidation = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    status: { type: 'string' },
    userId: { type: 'number' },
    agentId: { type: 'number' },
    retailerId: { type: 'number' },
    carrierId: { type: 'number' },
  },
};
