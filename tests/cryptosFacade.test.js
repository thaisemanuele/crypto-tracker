import * as facade from '../utils/cryptosFacade';

const marketsWithInvalidPrice = [
  {
    "id": "binance_btc_eur",
    "symbol": "BTC",
    "price": {
      "last": null,
    },
  },
  {
    "id": "bitfinex_btc_eur",
    "symbol": "BTC",
    "price": {
      "last": "15974.00000000",
    },
  },
];

const validItem = {
  id: "bitfinex_btc_eur",
  symbol: "BTC",
  price: {
    last: "15974.00000000",
  },
}

describe("Cryptos Facade", () => {

  it("parses price correctly", () => {
    const parsedPrice = facade.parsePrice("12.346");
    expect(
      parsedPrice
    ).toEqual(12.346);
  }),
  it("rounds price down", () => {
    const roundedPrice = facade.roundPrice("12.34234");
    expect(
      roundedPrice
    ).toEqual("12.34");
  }),
  it("rounds price up", () => {
    const roundedPrice = facade.roundPrice("12.35234");
    expect(
      roundedPrice
    ).toEqual("12.35");
  }),
  it("filters invalid prices", () => {
    const withValidPrice = facade.filterInvalidPrices(marketsWithInvalidPrice);
    expect(
      withValidPrice.some(({id}) => id === "binance_btc_eur")
    ).toBe(false)
  }),
  it("keeps valid prices", () => {
    const withValidPrice = facade.filterInvalidPrices(marketsWithInvalidPrice);
    expect(
      withValidPrice.some(({id}) => id === "bitfinex_btc_eur")
    ).toBe(true)
  }),
  it("builts cryptocurrency item with correct price", () => {
    const builtItem = facade.buildCryptocurrencyItem(validItem);
    expect(
      builtItem.price.last
    ).toEqual("15974.00")
  })
})