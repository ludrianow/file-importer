import { Location, OpeningHour } from './../../domain/entities/Contact';

export interface IContactList {
  rank: number
  title: string
  price: any
  categoryName: string
  address: string
  neighborhood: string
  street: string
  city: string
  postalCode: string
  state: string
  countryCode: string
  phone: string
  phoneUnformatted: string
  claimThisBusiness: boolean
  location: Location
  totalScore: number
  permanentlyClosed: boolean
  temporarilyClosed: boolean
  placeId: string
  categories: string[]
  fid: string
  cid: string
  reviewsCount: number
  imagesCount: number
  imageCategories: any[]
  scrapedAt: string
  googleFoodUrl: any
  hotelAds: any[]
  openingHours: OpeningHour[]
  peopleAlsoSearch: any[]
  placesTags: any[]
  reviewsTags: any[]
  additionalInfo: any
  gasPrices: any[]
  url: string
  searchPageUrl: string
  searchString: string
  language: string
  isAdvertisement: boolean
  imageUrl: string
  kgmid: string
  emails: any[]
  phones: any[]
  phonesUncertain: any[]
  linkedIns: any[]
  twitters: any[]
  instagrams: any[]
  facebooks: any[]
  youtubes: any[]
  tiktoks: any[]
  pinterests: any[]
  discords: any[],
  hasContacted: boolean;
}

export interface IFilterContactList {
  page: number;
  limit: number;
}
