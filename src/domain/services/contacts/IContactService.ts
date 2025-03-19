import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";
import { ContactResponseDTO } from "@/application/dto/ContactResponseDTO";

export interface IContactService {
  save(contact: ContactCreateOrUpdateDTO): Promise<ContactResponseDTO|unknown>;
}