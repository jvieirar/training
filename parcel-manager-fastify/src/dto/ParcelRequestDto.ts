export interface ParcelRequestDto {
  externalId: string;
  type: string;
  status?: string;
  userId?: string;
  agentId?: string;
  retailerId?: string;
  carrierId?: string;
}
