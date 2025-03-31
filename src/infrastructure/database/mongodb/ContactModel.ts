import mongoose, { Document, model } from "mongoose";

interface Location {
  lat: number;
  lng: number;
}

interface OpeningHour {
  day: string;
  hours: string;
}

export type TContact = {
  rank: number;
  title: string;
  price: any;
  categoryName: string;
  address: string;
  neighborhood: string;
  street: string;
  city: string;
  postalCode: string;
  state: string;
  countryCode: string;
  phone: string;
  phoneUnformatted: string;
  claimThisBusiness: boolean;
  location: Location;
  totalScore: number;
  permanentlyClosed: boolean;
  temporarilyClosed: boolean;
  placeId: string;
  categories: string[];
  fid: string;
  cid: string;
  reviewsCount: number;
  imagesCount: number;
  imageCategories: any[];
  scrapedAt: string;
  googleFoodUrl: any;
  hotelAds: any[];
  openingHours: OpeningHour[];
  peopleAlsoSearch: any[];
  placesTags: any[];
  reviewsTags: any[];
  additionalInfo: any;
  gasPrices: any[];
  url: string;
  searchPageUrl: string;
  searchString: string;
  language: string;
  isAdvertisement: boolean;
  imageUrl: string;
  kgmid: string;
  emails: any[];
  phones: any[];
  phonesUncertain: any[];
  linkedIns: any[];
  twitters: any[];
  instagrams: any[];
  facebooks: any[];
  youtubes: any[];
  tiktoks: any[];
  pinterests: any[];
  discords: any[];
  hasContacted: boolean;
  hasContactedDate: string;
  typesContact: string[];
}

export interface IContact extends TContact, Document {}

const contactSchema = new mongoose.Schema({
    additionalInfo: { type: mongoose.Schema.Types.Mixed, default: {} },
    additionalOpeningHours: { type: mongoose.Schema.Types.Mixed, default: {} },
    address: { type: String },
    categories: [String],
    categoryName: String,
    cid: String,
    city: String,
    claimThisBusiness: Boolean,
    countryCode: String,
    domain: String,
    emails: [String],
    facebooks: [String],
    fid: String,
    googleFoodUrl: String,
    imageUrl: String,
    imagesCount: Number,
    instagrams: [String],
    isAdvertisement: Boolean,
    kgmid: String,
    language: String,
    linkedIns: [String],
    location: {
      lat: Number,
      lng: Number,
    },
    neighborhood: String,
    openingHours: [
      {
        day: String,
        hours: String,
      },
    ],
    permanentlyClosed: Boolean,
    phone: String,
    phoneUnformatted: String,
    phones: [String],
    phonesUncertain: [String],
    placeId: String,
    postalCode: String,
    price: String,
    rank: Number,
    reviewsCount: Number,
    scrapedAt: Date,
    searchPageUrl: String,
    searchString: String,
    state: String,
    street: String,
    temporarilyClosed: Boolean,
    tiktoks: [String],
    title: String,
    totalScore: Number,
    twitters: [String],
    url: String,
    website: String,
    youtubes: [String],

    hasContacted: { type: Boolean, default: false },
    hasContactedDate: String,
    typesContact: [String],
  },
  { timestamps: true }
)

export const ContactModel = mongoose.model("Contact", contactSchema);

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;