import { ContactCreateOrUpdateDTO } from '@/application/dto/ContactCreateOrUpdateDTO';
import { IContact } from '@/infrastructure/database/mongodb/ContactModel';

export interface IContactRepository {
  save(contact: ContactCreateOrUpdateDTO): Promise<unknown>;
  find(skip: number, limit: number): Promise<IContact[]>;
  getContactById(id: string): Promise<IContact | null>;
  getContactByPhone(phone: string): Promise<IContact | null>;
}