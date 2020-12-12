import store from '../store/store';
import { CryptocurrencyItemType, addCryptocurrency, removeCryptocurrency } from '../core-state/cryptocurrencies.slice';

const parsePrice = (price: string) => Number.parseFloat(price);
const roundPrice = (price: number): string => (Math.round(price*100)/100).toFixed(2);

const filterInvalidPrices = (markets) => markets.filter(market => market.price && market.price.last);

export const addOneFromList = (itemsList: CryptocurrencyItemType[]) => {

  const itemsWithValidPrices = filterInvalidPrices(itemsList);
  if (itemsWithValidPrices.length) {
    const validItem = itemsWithValidPrices[0];
    const cryptocurrencyItem = {
      id: validItem.id,
      symbol: validItem.symbol,
      price: {
        last: roundPrice(parsePrice(validItem.price.last))
      }
    }
    removeOne(validItem.id);
    store.dispatch(addCryptocurrency(cryptocurrencyItem));
  }
}

export const removeOne = (id: string) => {
  const { cryptocurrencies } = store.getState();
  if( cryptocurrencies.currenciesIncluded[id]){
    store.dispatch(removeCryptocurrency(id));
  }
}