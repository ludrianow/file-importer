import { ContactCreateOrUpdateDTO } from "@/application/dto/ContactCreateOrUpdateDTO";

interface IContactResponse extends ContactCreateOrUpdateDTO {
  _id: string;
  hasContacted: boolean;
  typesContact: string[];
  createdAt: string;
  updatedAt: string;
}

export type ContactResponseDTO = Readonly<IContactResponse>