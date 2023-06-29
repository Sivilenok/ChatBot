import { configureStore } from '@reduxjs/toolkit';

import { filterReducer, platformReducer, platformsReducer, userReducer, languageReducer } from './features';

export const store = configureStore({
  reducer: {
    user: userReducer,
    platforms: platformsReducer,
    platform: platformReducer,
    sortPlatforms: platformsReducer,
    filter: filterReducer,
    language: languageReducer,
  },
});
