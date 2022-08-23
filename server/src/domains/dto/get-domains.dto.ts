import { Domain } from "../schemas/domain.schema";

export class GetDomainsDto {
  userEmail: string;
  domains: [Domain];
}
