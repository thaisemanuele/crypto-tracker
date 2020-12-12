import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import dynamic from 'next/dynamic';
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { addOneFromList } from '../utils/cryptosFacade';

const TrackerForm = dynamic(() => import('../components/tracker-form'));
const CryptocurrencyList = dynamic(() => import('../components/cryptocurrency-list'));

const GET_CRYPTOCURRENCY_ITEMS = gql`
query currencyItems($symbol: String){
  markets(
    filter:{ 
      baseSymbol: {_eq: $symbol} 
      quoteSymbol: {_eq:"EUR"} 
      marketStatus: { _eq: Active }
    }) {
    id
    symbol: baseSymbol
    price: ticker {
      last:lastPrice
    }
  }
}
`

export default function Home() {
  const [getCryptoCurrencyItems, {loading, data}] = useLazyQuery(GET_CRYPTOCURRENCY_ITEMS, {
    fetchPolicy: "cache-and-network"
  });

  useEffect(() => {
    if (data && data.markets && !loading) {
      const { markets } = data;
      addOneFromList(markets);
    }
  }, [data, loading]);

  const addItem = (cryptoCode: string) => {
    getCryptoCurrencyItems({
      variables: {"symbol":cryptoCode}
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto tracker | Bitcasino cryptocurrency tracker</title>
        <meta name="description" content="A simple cryptocurrency tracker built with React and using Apollo Client. Demo purposes only"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400&family=Kanit&display=swap" rel="stylesheet" />
      </Head>
      <section className={styles.hero} role="img" aria-label="Image Description">
        <div className={styles.logo}>
          <img src="./assets/logo.svg" alt="Bitcasino logo" />
        </div>
        
        <section className={styles['main-description']}>
          <h1>Now you can track all your cryptos here!</h1>
          <p>Just enter the cryptocurrency code on the form<span> to the right</span>.</p>
        </section>
        <div className={styles['input-form']}>
          <TrackerForm addCrypto={addItem} />
        </div>
        <img src="./assets/figure.png" alt="green leprechaun with a bag of golden coins"/>
        <CryptocurrencyList loading={loading} />
      </section>
      <footer className={`${styles['footer']} ${styles['small-text']}`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada augue. Duis quis sagittis neque. Aenean auctor auctor elit, nec blandit diam pretium a. Phasellus sit amet libero quis nisl sagittis varius. Ut at mauris lectus. Nam sit amet lacinia mi, et molestie ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </footer>
    </div>
  )
}
