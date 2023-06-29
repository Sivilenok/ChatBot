import { RootState } from 'store/types/types';

export const getPlatforms = (state: RootState) => state.platforms.platforms.rows;

export const getLoadingState = (state: RootState) => state.platforms.loadingState;

export const getIsLoaderVisible = (state: RootState) => state.platforms.isLoaderVisible;

export const getCountOfPlatforms = (state: RootState) => state.platforms.platforms.count;

export const getFavoritePlatforms = (state: RootState) => state.platforms.favoritePlatforms;

export const getVisitedPlatforms = (state: RootState) => state.platforms.visitedPlatforms;

export const getPlatform = (state: RootState) => state.platform;

export const getSortPlatforms = (state: RootState) => state.sortPlatforms;
