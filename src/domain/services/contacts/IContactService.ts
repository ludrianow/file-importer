import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";
import { ContactResponseDTO } from "@/application/dto/ContactResponseDTO";
import { IContact } from "@/infrastructure/database/mongodb/ContactModel";

export interface IContactService {
  save(contact: ContactCreateOrUpdateDTO): Promise<ContactResponseDTO|unknown>;
  find(skip: number, limit: number): Promise<any[]>;
  findById(id: string): Promise<IContact | null>;
  findByPhone(phone: string): Promise<IContact | null>
}