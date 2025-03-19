import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";
import { Contact } from "@/domain/entities/Contact";
import { IContactRepository } from "@/domain/repositories/IContactRepository";

export class CreateContactUseCase {
  constructor(private readonly contactRepository: IContactRepository) {}

  async execute(data: ContactCreateOrUpdateDTO): Promise<Contact> {

    return await this.contactRepository.save(data);
  }
}