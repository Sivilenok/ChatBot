import { createSlice } from '@reduxjs/toolkit';
import { setPlatformsAction } from 'store/actions';
import { IPlatformsState } from 'store/types';

const initialState: IPlatformsState = {
  platforms: { count: '0', rows: [] },
  favoritePlatforms: [],
  visitedPlatforms: [],
  loadingState: 'idle',
  error: null,
  isLoaderVisible: true,
  sortKey: 'name', 
  sortDirection: 'asc',
};

const platformsSlice = createSlice({
  name: 'platforms',
  initialState,
  reducers: {
    setSortKey: (state, action) => {
      state.sortKey = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setPlatformsAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.isLoaderVisible = true;
      })
      .addCase(setPlatformsAction.fulfilled, (state, { payload, meta }) => {
        state.loadingState = meta.requestStatus;
        state.isLoaderVisible = false;
        state.platforms.count = payload.count;
        state.platforms.rows = payload.rows;
      })
      .addCase(setPlatformsAction.rejected, (state, { error, meta }) => {
        state.loadingState = meta.requestStatus;
        state.error = error;
      });
  },
});

export const { reducer: platformsReducer } = platformsSlice;
