import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";
import { ContactResponseDTO } from "@/application/dto/ContactResponseDTO";
import { IContactFilter } from "@/application/interface/IContactFilter";
import { IContact } from "@/infrastructure/database/mongodb/ContactModel";

export interface IContactService {
  save(contact: ContactCreateOrUpdateDTO): Promise<ContactResponseDTO|unknown>;
  find(skip: number, limit: number): Promise<any[]>;
  findById(id: string): Promise<IContact | null>;
  findByPhone(phone: string): Promise<IContact | null>;
  findByFilter(filter: IContactFilter, skip: number, limit: number): Promise<IContact[]>;
  markLeadContacted(phone: string, typeContact: string[]): Promise<IContact | null>;
}