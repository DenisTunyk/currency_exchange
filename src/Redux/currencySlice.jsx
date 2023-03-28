import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

const curencyInitialState = {
  currency: '',
};

const baseCurrencySlice = createSlice({
  name: 'baseCurrency',
  initialState: curencyInitialState,

  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.currency = action.payload;
    },
  },
});

export const baseCurrencyReducer = baseCurrencySlice.reducer;
