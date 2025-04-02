import { ContactCreateOrUpdateDTO } from '@/application/dto/ContactCreateOrUpdateDTO';
import { IContactFilter } from '@/application/interface/IContactFilter';
import { IContactRepository } from '@/domain/repositories/IContactRepository';
import { ContactModel, IContact } from './../database/mongodb/ContactModel';

export class ContactRepositoryImpl implements IContactRepository {

  async save(contact: ContactCreateOrUpdateDTO): Promise<unknown> {
    const newContact = new ContactModel(contact);
    await newContact.save();
    return newContact;
  }

  async find(skip: number, limit: number): Promise<IContact[]> {

    return await ContactModel.find({}, {
      _id: 1, title: 1, categoryName: 1, phone: 1, phoneUnformatted: 1, address: 1, city: 1, street: 1, neighborhood: 1, countryCode: 1, state: 1, location: 1, openingHours: 1, additionalOpeningHours: 1
    }).skip(skip).limit(limit).lean<IContact[]>();

  }

  async getContactById(id: string): Promise<IContact | null> {
    return await ContactModel.findById(id).lean<IContact| null>();
  }

  async getContactByPhone(phone: string): Promise<IContact | null> {
    return await ContactModel.findOne({phoneUnformatted: phone}, {
      _id: 1, title: 1, categoryName: 1, phone: 1, phoneUnformatted: 1, address: 1, city: 1, street: 1, neighborhood: 1, countryCode: 1, state: 1, location: 1, openingHours: 1, additionalOpeningHours: 1
    }).lean<IContact| null>()
  }

  async getContactByFilter(filter: IContactFilter, skip: number, limit: number): Promise<IContact[]> {
    const findFilter = {
      categories: filter.category
    }

    return await ContactModel.find(findFilter, {
      _id: 1, title: 1, categoryName: 1, phone: 1, phoneUnformatted: 1, address: 1, city: 1, street: 1, neighborhood: 1, countryCode: 1, state: 1, location: 1, openingHours: 1, additionalOpeningHours: 1
    }).skip(skip).limit(limit).lean<IContact[]>();
  }

  async markLeadContacted(phone: string, typesContact: string| string[]): Promise<IContact| null> {
    return await ContactModel.findOneAndUpdate({phoneUnformatted: phone},{typesContact}).lean<IContact| null>()
  }

}