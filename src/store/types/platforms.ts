import { IPlatfromCard } from './platformCard';

export interface IGetPlatformsResponse {
  count: string;
  rows: IPlatfromCard[];
}

export interface IPlatformsState {
  platforms: IGetPlatformsResponse;
  favoritePlatforms: IPlatfromCard[];
  visitedPlatforms: IPlatfromCard[];
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: {} | null;
  isLoaderVisible: boolean;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
}
