import { IContactList } from "@/application/interface/IContactList";

export class Contact {
    private rank: number;
    private title: string;
    private price: any;
    private categoryName: string;
    private address: string;
    private neighborhood: string;
    private street: string;
    private city: string;
    private postalCode: string;
    private state: string;
    private countryCode: string;
    private phone: string;
    private phoneUnformatted: string;
    private claimThisBusiness: boolean;
    private location: Location;
    private totalScore: number;
    private permanentlyClosed: boolean;
    private temporarilyClosed: boolean;
    private placeId: string;
    private categories: string[];
    private fid: string;
    private cid: string;
    private reviewsCount: number;
    private imagesCount: number;
    private imageCategories: any[];
    private scrapedAt: string;
    private googleFoodUrl: any;
    private hotelAds: any[];
    private openingHours: OpeningHour[];
    private peopleAlsoSearch: any[];
    private placesTags: any[];
    private reviewsTags: any[];
    private additionalInfo: any;
    private gasPrices: any[];
    private url: string;
    private searchPageUrl: string;
    private searchString: string;
    private language: string;
    private isAdvertisement: boolean;
    private imageUrl: string;
    private kgmid: string;
    private emails: any[];
    private phones: any[];
    private phonesUncertain: any[];
    private linkedIns: any[];
    private twitters: any[];
    private instagrams: any[];
    private facebooks: any[];
    private youtubes: any[];
    private tiktoks: any[];
    private pinterests: any[];
    private discords: any[];
    private hasContacted: boolean;
    private hasContactedDate: string;
    private typesContact: string[];

    public constructor(data: IContactList) {
        this.rank = data.rank;
        this.title = data.title;
        this.price = data.price;
        this.categoryName = data.categoryName;
        this.address = data.address;
        this.neighborhood = data.neighborhood;
        this.street = data.street;
        this.city = data.city;
        this.postalCode = data.postalCode;
        this.state = data.state;
        this.countryCode = data.countryCode;
        this.phone = data.phone;
        this.phoneUnformatted = data.phoneUnformatted;
        this.claimThisBusiness = data.claimThisBusiness;
        this.location = data.location;
        this.totalScore = data.totalScore;
        this.permanentlyClosed = data.permanentlyClosed;
        this.temporarilyClosed = data.temporarilyClosed;
        this.placeId = data.placeId;
        this.categories = data.categories;
        this.fid = data.fid;
        this.cid = data.cid;
        this.reviewsCount = data.reviewsCount;
        this.imagesCount = data.imagesCount;
        this.imageCategories = data.imageCategories;
        this.scrapedAt = data.scrapedAt;
        this.googleFoodUrl = data.googleFoodUrl;
        this.hotelAds = data.hotelAds;
        this.openingHours = data.openingHours;
        this.peopleAlsoSearch = data.peopleAlsoSearch;
        this.placesTags = data.placesTags;
        this.reviewsTags = data.reviewsTags;
        this.additionalInfo = data.additionalInfo;
        this.gasPrices = data.gasPrices;
        this.url = data.url;
        this.searchPageUrl = data.searchPageUrl;
        this.searchString = data.searchString;
        this.language = data.language;
        this.isAdvertisement = data.isAdvertisement;
        this.imageUrl = data.imageUrl;
        this.kgmid = data.kgmid;
        this.emails = data.emails;
        this.phones = data.phones;
        this.phonesUncertain = data.phonesUncertain;
        this.linkedIns = data.linkedIns;
        this.twitters = data.twitters;
        this.instagrams = data.instagrams;
        this.facebooks = data.facebooks;
        this.youtubes = data.youtubes;
        this.tiktoks = data.tiktoks;
        this.pinterests = data.pinterests;
        this.discords = data.discords;
        this.hasContacted = data.hasContacted;
        this.hasContactedDate = '';
        this.typesContact = [];
    }

    public getRank(): number {
        return this.rank;
    }

    public getTitle(): string {
        return this.title;
    }

    public getPrice(): any {
        return this.price;
    }

    public getCategoryName(): string {
        return this.categoryName;
    }

    public getAddress(): string {
        return this.address;
    }

    public getNeighborhood(): string {
        return this.neighborhood;
    }

    public getStreet(): string {
        return this.street;
    }

    public getCity(): string {
        return this.city;
    }

    public getPostalCode(): string {
        return this.postalCode;
    }

    public getState(): string {
        return this.state;
    }

    public getCountryCode(): string {
        return this.countryCode;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getPhoneUnformatted(): string {
        return this.phoneUnformatted;
    }

    public getClaimThisBusiness(): boolean {
        return this.claimThisBusiness;
    }

    public getLocation(): Location {
        return this.location;
    }

    public getTotalScore(): number {
        return this.totalScore;
    }

    public getPermanentlyClosed(): boolean {
        return this.permanentlyClosed;
    }

    public getTemporarilyClosed(): boolean {
        return this.temporarilyClosed;
    }

    public getPlaceId(): string {
        return this.placeId;
    }

    public getCategories(): string[] {
        return this.categories;
    }

    public getFid(): string {
        return this.fid;
    }

    public getCid(): string {
        return this.cid;
    }

    public getReviewsCount(): number {
        return this.reviewsCount;
    }

    public getImagesCount(): number {
        return this.imagesCount;
    }

    public getImageCategories(): any[] {
        return this.imageCategories;
    }

    public getScrapedAt(): string {
        return this.scrapedAt;
    }

    public getGoogleFoodUrl(): any {
        return this.googleFoodUrl;
    }

    public getHotelAds(): any[] {
        return this.hotelAds;
    }

    public getOpeningHours(): OpeningHour[] {
        return this.openingHours;
    }

    public getPeopleAlsoSearch(): any[] {
        return this.peopleAlsoSearch;
    }

    public getPlacesTags(): any[] {
        return this.placesTags;
    }

    public getReviewsTags(): any[] {
        return this.reviewsTags;
    }

    public getAdditionalInfo(): any {
        return this.additionalInfo;
    }

    public getGasPrices(): any[] {
        return this.gasPrices;
    }

    public getUrl(): string {
        return this.url;
    }

    public getSearchPageUrl(): string {
        return this.searchPageUrl;
    }

    public getSearchString(): string {
        return this.searchString;
    }

    public getLanguage(): string {
        return this.language;
    }

    public getIsAdvertisement(): boolean {
        return this.isAdvertisement;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public getKgmid(): string {
        return this.kgmid;
    }

    public getEmails(): any[] {
        return this.emails;
    }

    public getPhones(): any[] {
        return this.phones;
    }

    public getPhonesUncertain(): any[] {
        return this.phonesUncertain;
    }

    public getLinkedIns(): any[] {
        return this.linkedIns;
    }

    public getTwitters(): any[] {
        return this.twitters;
    }

    public getInstagrams(): any[] {
        return this.instagrams;
    }

    public getFacebooks(): any[] {
        return this.facebooks;
    }

    public getYoutubes(): any[] {
        return this.youtubes;
    }

    public getTiktoks(): any[] {
        return this.tiktoks;
    }

    public getPinterests(): any[] {
        return this.pinterests;
    }

    public getDiscords(): any[] {
        return this.discords;
    }

    public getHasContacted(): boolean {
        return this.hasContacted;
    }

    public getHasContactedDate(): string {
        return this.hasContactedDate;
    }

    public getTypesContact(): string[] {
        return this.typesContact;
    }

    public setRank(rank: number): void {
        this.rank = rank;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setPrice(price: any): void {
        this.price = price;
    }

    public setCategoryName(categoryName: string): void {
        this.categoryName = categoryName;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public setNeighborhood(neighborhood: string): void {
        this.neighborhood = neighborhood;
    }

    public setStreet(street: string): void {
        this.street = street;
    }

    public setCity(city: string): void {
        this.city = city;
    }

    public setPostalCode(postalCode: string): void {
        this.postalCode = postalCode;
    }

    public setState(state: string): void {
        this.state = state;
    }

    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public setPhoneUnformatted(phoneUnformatted: string): void {
        this.phoneUnformatted = phoneUnformatted;
    }

    public setClaimThisBusiness(claimThisBusiness: boolean): void {
        this.claimThisBusiness = claimThisBusiness;
    }

    public setLocation(location: Location): void {
        this.location = location;
    }

    public setTotalScore(totalScore: number): void {
        this.totalScore = totalScore;
    }

    public setPermanentlyClosed(permanentlyClosed: boolean): void {
        this.permanentlyClosed = permanentlyClosed;
    }

    public setTemporarilyClosed(temporarilyClosed: boolean): void {
        this.temporarilyClosed = temporarilyClosed;
    }

    public setPlaceId(placeId: string): void {
        this.placeId = placeId;
    }

    public setCategories(categories: string[]): void {
        this.categories = categories;
    }

    public setFid(fid: string): void {
        this.fid = fid;
    }

    public setCid(cid: string): void {
        this.cid = cid;
    }

    public setReviewsCount(reviewsCount: number): void {
        this.reviewsCount = reviewsCount;
    }

    public setImagesCount(imagesCount: number): void {
        this.imagesCount = imagesCount;
    }

    public setImageCategories(imageCategories: any[]): void {
        this.imageCategories = imageCategories;
    }

    public setScrapedAt(scrapedAt: string): void {
        this.scrapedAt = scrapedAt;
    }

    public setGoogleFoodUrl(googleFoodUrl: any): void {
        this.googleFoodUrl = googleFoodUrl;
    }

    public setHotelAds(hotelAds: any[]): void {
        this.hotelAds = hotelAds;
    }

    public setOpeningHours(openingHours: OpeningHour[]): void {
        this.openingHours = openingHours;
    }

    public setPeopleAlsoSearch(peopleAlsoSearch: any[]): void {
        this.peopleAlsoSearch = peopleAlsoSearch;
    }

    public setPlacesTags(placesTags: any[]): void {
        this.placesTags = placesTags;
    }

    public setReviewsTags(reviewsTags: any[]): void {
        this.reviewsTags = reviewsTags;
    }

    public setAdditionalInfo(additionalInfo: any): void {
        this.additionalInfo = additionalInfo;
    }

    public setGasPrices(gasPrices: any[]): void {
        this.gasPrices = gasPrices;
    }

    public setUrl(url: string): void {
        this.url = url;
    }

    public setSearchPageUrl(searchPageUrl: string): void {
        this.searchPageUrl = searchPageUrl;
    }

    public setSearchString(searchString: string): void {
        this.searchString = searchString;
    }

    public setLanguage(language: string): void {
        this.language = language;
    }

    public setIsAdvertisement(isAdvertisement: boolean): void {
        this.isAdvertisement = isAdvertisement;
    }

    public setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

    public setKgmid(kgmid: string): void {
        this.kgmid = kgmid;
    }

    public setEmails(emails: any[]): void {
        this.emails = emails;
    }

    public setPhones(phones: any[]): void {
        this.phones = phones;
    }

    public setPhonesUncertain(phonesUncertain: any[]): void {
        this.phonesUncertain = phonesUncertain;
    }

    public setLinkedIns(linkedIns: any[]): void {
        this.linkedIns = linkedIns;
    }

    public setTwitters(twitters: any[]): void {
        this.twitters = twitters;
    }

    public setInstagrams(instagrams: any[]): void {
        this.instagrams = instagrams;
    }

    public setFacebooks(facebooks: any[]): void {
        this.facebooks = facebooks;
    }

    public setYoutubes(youtubes: any[]): void {
        this.youtubes = youtubes;
    }

    public setTiktoks(tiktoks: any[]): void {
        this.tiktoks = tiktoks;
    }

    public setPinterests(pinterests: any[]): void {
        this.pinterests = pinterests;
    }

    public setDiscords(discords: any[]): void {
        this.discords = discords;
    }

    public setHasContacted(hasContacted: boolean): void {
        this.hasContacted = hasContacted;
    }

    public setHasContactedDate(hasContactedDate: string): void {
        this.hasContactedDate = hasContactedDate;
    }

    public setTypesContact(typesContact: string[]): void {
        this.typesContact = typesContact;
    }
}

export class Location {
    private lat: number;
    private lng: number;

    public constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

    public getLat(): number {
        return this.lat;
    }

    public getLng(): number {
        return this.lng;
    }

    public setLat(lat: number): void {
        this.lat = lat;
    }

    public setLng(lng: number): void {
        this.lng = lng;
    }
}

export class OpeningHour {
    private day: string;
    private hours: string;

    public constructor(day: string, hours: string) {
        this.day = day;
        this.hours = hours;
    }

    public getDay(): string {
        return this.day;
    }

    public getHours(): string {
        return this.hours;
    }

    public setDay(day: string): void {
        this.day = day;
    }

    public setHours(hours: string): void {
        this.hours = hours;
    }
}
