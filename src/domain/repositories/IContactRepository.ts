import { ContactCreateOrUpdateDTO } from '@/application/dto/ContactCreateOrUpdateDTO';
import { IContactFilter } from '@/application/interface/IContactFilter';
import { IContact } from '@/infrastructure/database/mongodb/ContactModel';

export interface IContactRepository {
  save(contact: ContactCreateOrUpdateDTO): Promise<unknown>;
  find(skip: number, limit: number): Promise<IContact[]>;
  getContactByFilter(filter: IContactFilter, skip: number, limit: number): Promise<IContact[]>;
  getContactById(id: string): Promise<IContact | null>;
  getContactByPhone(phone: string): Promise<IContact | null>;
  markLeadContacted(phone: string, typesContact: string| string[]): Promise<IContact| null>;
}