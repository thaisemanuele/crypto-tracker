import store from '../store/store';
import { CryptocurrencyItemType, addCryptocurrency, removeCryptocurrency } from '../core-state/cryptocurrencies.slice';

export const parsePrice = (price: string) => Number.parseFloat(price);
export const roundPrice = (price: number): string => (Math.round(price*100)/100).toFixed(2);

export const filterInvalidPrices = (markets:CryptocurrencyItemType[]) => markets.filter(market => market.price && market.price.last);

export const addOneFromList = (itemsList: CryptocurrencyItemType[]) => {
  const itemsWithValidPrices = filterInvalidPrices(itemsList);

  if (itemsWithValidPrices.length) {
    const validItem = itemsWithValidPrices[0];
    const cryptocurrencyItem = buildCryptocurrencyItem(validItem);
    removeOne(validItem.id);
    addOne(cryptocurrencyItem);
  }
}

const addOne = (item: CryptocurrencyItemType): void => {
  store.dispatch(addCryptocurrency(item));
}

export const removeOne = (id: string): void => {
  const { cryptocurrencies } = store.getState();
  if( cryptocurrencies.currenciesIncluded[id]){
    store.dispatch(removeCryptocurrency(id));
  }
}

export const buildCryptocurrencyItem = (validItem: CryptocurrencyItemType): CryptocurrencyItemType => {
  return {
    id: validItem.id,
    symbol: validItem.symbol,
    price: {
      last: roundPrice(parsePrice(validItem.price.last))
    }
  };
}
