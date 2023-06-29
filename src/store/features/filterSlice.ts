import { createSlice } from '@reduxjs/toolkit';

interface IFilterSlice {
  isFullscreen: boolean;
  options: [];
}

const initialState: IFilterSlice = {
  isFullscreen: false,
  options: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.isFullscreen = !state.isFullscreen;
    },
  },
});

export const {
  reducer: filterReducer,
  actions: { toggleFilter },
} = filterSlice;
