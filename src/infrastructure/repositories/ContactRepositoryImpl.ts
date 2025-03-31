import { ContactCreateOrUpdateDTO } from '@/application/dto/ContactCreateOrUpdateDTO';
import { IContactRepository } from '@/domain/repositories/IContactRepository';
import { ContactModel, IContact } from './../database/mongodb/ContactModel';

export class ContactRepositoryImpl implements IContactRepository {

  async save(contact: ContactCreateOrUpdateDTO): Promise<unknown> {
    const newContact = new ContactModel(contact);
    await newContact.save();
    return newContact;
  }

  async find(skip: number, limit: number): Promise<IContact[]> {

    return await ContactModel.find().skip(skip).limit(limit).lean<IContact[]>();

  }

  async getContactById(id: string): Promise<IContact | null> {
    return await ContactModel.findById(id).lean<IContact| null>();
  }

  async getContactByPhone(phone: string): Promise<IContact | null> {
    return await ContactModel.findOne({phoneUnformatted: phone}).lean<IContact| null>()
  }

}