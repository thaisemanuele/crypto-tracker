import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const CRYPTOCURRENCIES_FEATURE_KEY = 'cryptocurrencies';


export interface CryptocurrencyItemType {
  id: string
  symbol: string
  price: {
      last: string
  }
}

export interface CryptocurrencyState {
  currencies: CryptocurrencyItemType[];
  currenciesIncluded: {[key: string]: boolean};
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string | null;
}

export const initialCryptocurrenciesState: CryptocurrencyState = {
  currencies: [],
  currenciesIncluded: {},
  loadingStatus: 'not loaded',
  error: null,
}

export const cryptocurrenciesSlice = createSlice({
  name: CRYPTOCURRENCIES_FEATURE_KEY,
  initialState: initialCryptocurrenciesState,
  reducers: {
    addCryptocurrency: (state, action: PayloadAction<CryptocurrencyItemType>) => {
      if (!state.currenciesIncluded[action.payload.id]) {
        state.currencies = [ action.payload, ...state.currencies];
        state.currenciesIncluded[action.payload.id] = true;
      }
    },
    removeCryptocurrency: (state, action: PayloadAction<string>) => {
      const newCurrencies = state.currencies.filter(item => item.id !== action.payload);
      state.currencies = newCurrencies;
      state.currenciesIncluded[action.payload] = false;
    },
  }
});

export const { addCryptocurrency, removeCryptocurrency } = cryptocurrenciesSlice.actions;

export const cryptocurrenciesReducer = cryptocurrenciesSlice.reducer;