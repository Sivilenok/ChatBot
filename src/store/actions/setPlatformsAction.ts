import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPlatformCards } from 'api';
import { IGetPlatformsResponse } from 'store/types';

interface UserData {
  amount: string;
  count: string;
  sortKey: string;
  sortDirection: 'asc' | 'desc'; 
}

export const setPlatformsAction = createAsyncThunk<IGetPlatformsResponse, UserData>(
  'platforms/setPlatformsAction',
  async ({ amount, count }) => {
    return await getPlatformCards(amount, count);   
  }
);

