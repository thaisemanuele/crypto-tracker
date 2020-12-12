import React, { MouseEvent } from 'react';

import { removeOne } from '../utils/cryptosFacade';
import { CryptocurrencyItemType } from '../core-state/cryptocurrencies.slice';

import styles from './cryptocurrency-item.module.scss';

interface CryptocurrencyItemProps {
  item: CryptocurrencyItemType
}

const CryptocurrencyItem = ({ item }: CryptocurrencyItemProps) => {
  const removeItem = (e: MouseEvent) => {
    removeOne(e.currentTarget.id);
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