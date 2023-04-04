import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/service';

// GET @ /tasks
export const fetchBaseCurrency = createAsyncThunk(
  'baseCurrency/fetch',
  async (loc, thunkAPI) => {
    try {
      const res = await getUserInfo(loc);
      //console.log(res);
      //return res.results[0].annotations.currency.iso_code;
      return res.results[0].formatted;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
