import { RootState } from 'store/types/types';

export const getIsFilterFullscreen = (state: RootState) => state.filter.isFullscreen;
