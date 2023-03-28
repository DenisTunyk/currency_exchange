import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/service';

// GET @ /tasks
export const fetchBaseCurrency = createAsyncThunk(
  'baseCurrency/fetch',
  async (loc, thunkAPI) => {
    try {
      const res = await getUserInfo(loc);
      return res.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
