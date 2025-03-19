import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";
import { ContactResponseDTO } from "@/application/dto/ContactResponseDTO";
import { IContactRepository } from "@/domain/repositories/IContactRepository";
import { ContactModel } from '@/infrastructure/database/mongodb/ContactModel';
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
}