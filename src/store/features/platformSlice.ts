import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlatformDetails } from 'store/types';

const initialState: IPlatformDetails = {
  title: '',
  picture: '',
  text: '',
  link: '',
  id: '',
  isFavorite: false,
  CRM: '',
  services: [],
  voiceHelpers: [],
  API: '',
  paymentSystems: '',
  solutions: [],
  reviews: [],
};

const platformSlice = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setPlatform: (state, { payload }: PayloadAction<IPlatformDetails | undefined>) => {
      if (payload) {
        state.title = payload.title;
        state.picture = payload.picture;
        state.text = payload.text;
        state.link = payload.link;
        state.id = payload.id;
        state.isFavorite = payload.isFavorite;
        state.CRM = payload.CRM;
        state.services = payload.services;
        state.voiceHelpers = payload.voiceHelpers;
        state.API = payload.API;
        state.paymentSystems = payload.paymentSystems;
        state.solutions = payload.solutions;
        state.reviews = payload.reviews;
      }
    },
  },
});

export const {
  reducer: platformReducer,
  actions: { setPlatform },
} = platformSlice;
