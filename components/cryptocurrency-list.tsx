import React from 'react';

import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { CircularProgress } from '@material-ui/core';

const CryptocurrencyItem = dynamic(() => import('../components/cryptocurrency-item'));


import styles from './cryptocurrency-list.module.scss'

const CryptocurrencyList = ({loading}) => {

  const cryptocurrencyItems = useSelector((state: RootState) => state.cryptocurrencies.currencies);

  const listItems = cryptocurrencyItems.map(item => {
    return (
      <li key={item.id}>
        <CryptocurrencyItem item={item} />
        <hr className={styles['crypto-item-divider']}/>
      </li>
    );
  })

  return (
    <section className={styles['cryptos-list']}>
    {loading ? <div className={styles['loader']}><CircularProgress /></div> : null}   
      <ul>
        {listItems}
      </ul>
    </section>
  )

}

export default CryptocurrencyList;