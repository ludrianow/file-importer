import { ContactCreateOrUpdateDTO } from '@/application/dto/ContactCreateOrUpdateDTO';
import { IContactRepository } from '@/domain/repositories/IContactRepository';
import { ContactModel } from './../database/mongodb/ContactModel';

export class ContactRepositoryImpl implements IContactRepository {

  constructor(contactModel: typeof ContactModel) {}

  async save(contact: ContactCreateOrUpdateDTO): Promise<unknown> {
    const newContact = new ContactModel(contact);
    await newContact.save();
    return newContact;
  }

}