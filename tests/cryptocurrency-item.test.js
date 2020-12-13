import { render, screen } from "@testing-library/react";

import CryptocurrencyItem from "../components/cryptocurrency-item";

const cryptoItem = {
  id: "bitfinex_btc_eur",
  symbol: "BTC",
  price: {
    last: "15974.00",
  },
}

describe("Cryptocurrency Item", () => {
  it("renders without error", () => {
    render(
      <CryptocurrencyItem item={cryptoItem} />
    );
    expect(
      screen.getByTestId(cryptoItem.id)
    ).toBeInTheDocument;
  }),
  it("renders with correct name", () => {
    render(
      <CryptocurrencyItem item={cryptoItem} />
    );
    expect(
      screen.getByText("BTC")
    ).toBeInTheDocument;
  }),
  it("renders with correct price", () => {
    render(
      <CryptocurrencyItem item={cryptoItem} />
    );
    expect(
      screen.getByText("15974.00 €")
    ).toBeInTheDocument;
  })
})