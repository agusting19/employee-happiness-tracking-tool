import { createSlice } from '@reduxjs/toolkit';
import { localStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState: getLocalStorage(localStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(localStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(localStorageTypes.PEOPLE, state);
      return action.payload;
    },
  },
});