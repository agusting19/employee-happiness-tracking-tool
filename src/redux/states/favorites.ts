import { createSlice } from '@reduxjs/toolkit';
import { localStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(localStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorites: (state, action) => {
      setLocalStorage(localStorageTypes.FAVORITES, state);
      return action.payload;
    },
  },
});
