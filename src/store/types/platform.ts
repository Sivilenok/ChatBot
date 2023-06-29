export interface ISolutionCard {
  title: string;
  picture: string;
  text: string;
  id: string;
  isFavorite: boolean;
  link: string;
  price: string;
}

export interface IReviewCard {
  rating: string;
  text: string;
  id: string;
  name: string;
}

export interface IPlatformDetails {
  title: string;
  picture: string;
  text: string;
  id: string;
  isFavorite: boolean;
  link: string;
  CRM: string;
  services: Array<string>;
  voiceHelpers: Array<string>;
  API: string;
  paymentSystems: string;
  solutions: Array<ISolutionCard>;
  reviews: Array<IReviewCard>;
  date?: Date;
}
