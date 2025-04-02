import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";
import { ContactResponseDTO } from "@/application/dto/ContactResponseDTO";
import { IContactFilter } from "@/application/interface/IContactFilter";
import { IContactRepository } from "@/domain/repositories/IContactRepository";
import { ContactModel, IContact } from '@/infrastructure/database/mongodb/ContactModel';
import { formatPhoneWhatsapp } from "@/shared/utils/formatPhone";
import { IContactService } from "./IContactService";

export class ContactServiceImpl implements IContactService {

  constructor( private contactRepository: IContactRepository) {}

  public async save(contact: ContactCreateOrUpdateDTO): Promise<ContactResponseDTO| unknown> {
    let dataSaved: unknown;

    if (!contact.emails && !contact.phone && !contact.phoneUnformatted && !contact.phones && !contact.phonesUncertain) return;

    try {
      const contactExist = await ContactModel.findOne({
        $and: [
          { phone: contact.phone },
          { phoneUnformatted: contact.phoneUnformatted },
          { title: contact.title }
        ]
      });

      if (!contactExist) {
        dataSaved = await this.contactRepository.save(contact);
      }

    } catch (error) {
      console.error("Erro ao salvar contato:", error);
    }

    return dataSaved;
  }

  public async find(skip: number, limit: number): Promise<any[]> {

    if (skip === null || limit === null) throw new Error('Skip and Limit is required!')

    const response = await this.contactRepository.find(skip, limit);

    // console.log("response", response)

    return response;
  }

  public async findById(id: string): Promise<IContact | null> {
    const result = await this.contactRepository.getContactById(id)

    return result
  }

  public async findByPhone(phone: string): Promise<IContact | null> {

    const result = await this.contactRepository.getContactByPhone(formatPhoneWhatsapp(phone))

    return result;
  }

  public async findByFilter(filter: IContactFilter, skip: number, limit: number): Promise<IContact[]> {

    return await this.contactRepository.getContactByFilter(filter, skip, limit);
  }

  public async markLeadContacted(phone: string, typeContact: string[]): Promise<IContact| null> {
    const contact = await this.findByPhone(phone);

    if (!contact) {
      throw new Error('Lead não encontrado')
    }

    const updatedTypesContact = Array.from(new Set(typeContact));


    return await this.contactRepository.markLeadContacted(formatPhoneWhatsapp(phone), Array.from(updatedTypesContact));
  }

}