import { IPlatfromCard } from 'store';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

interface IFavoritePlatformsResponse {
  platformsFavorites: IPlatfromCard[];
}

export const getFavoritePlatforms = (): Promise<IFavoritePlatformsResponse> =>
  authUserAxiosInstance.get(endpoints.favoritePlatforms).then(({ data }) => data);
