import { IGetPlatformsResponse } from 'store';

import { authUserAxiosInstance } from './authUserAxiosInstance';
import { endpoints } from './endpoints';

type SortingType = 'desc' | 'asc' | undefined;

export const getPlatformCards = (
  amount: string,
  count: string,
  type: SortingType = 'asc',
): Promise<IGetPlatformsResponse> =>
  authUserAxiosInstance.get(`/${endpoints.getPlatformCards}/${amount}/${count}?type=${type}`).then(({ data }) => data);
