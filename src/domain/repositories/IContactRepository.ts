import { ContactCreateOrUpdateDTO } from '@/application/dto/ContactCreateOrUpdateDTO';

export interface IContactRepository {
  save(contact: ContactCreateOrUpdateDTO): Promise<unknown>;
}