import { combineReducers } from '@reduxjs/toolkit';
import { cryptocurrenciesReducer} from '../core-state/cryptocurrencies.slice'

const rootReducer = combineReducers({
  cryptocurrencies: cryptocurrenciesReducer,    
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;