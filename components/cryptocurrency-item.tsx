import React from 'react';

import styles from './cryptocurrency-item.module.scss';
import { removeOne } from '../utils/cryptosFacade';

const CryptocurrencyItem = ({item}) => {
  const removeItem = (e) => {
    removeOne(e.target.id);
  };

  return (
    <div className={styles['crypto-item']}>
      <img src="./assets/icon.svg" alt="Trophy icon" />
      <div className={styles['market']}>
        <p className={styles['name']}>{item.symbol}</p>
        <p className={styles['price']}>{item.price.last} €</p>
      </div>
      <span id={item.id} onClick={removeItem}>x</span>
    </div>
  )
}

export default CryptocurrencyItem;