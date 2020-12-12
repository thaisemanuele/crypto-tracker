import React, { useState, MouseEvent, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';
import styles from './tracker-form.module.scss';

interface TrackerFormProps {
  addCrypto: Function
}

const TrackerForm = ({ addCrypto }: TrackerFormProps) => {
  const [cryptoCode, setCryptoCode] = useState('');
  const inputProps = {style: {fontSize: '0.8rem'}}
  const inputLabelProps = {style: {fontSize: '0.8rem'}}

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCryptoCode(value);
  }

  const handleButtonClick = (e: MouseEvent) => {
    e.preventDefault();
    setCryptoCode('');
    addCrypto(cryptoCode);
  }
  
  return (
    <div>
      <form action="" autoComplete="off" className={styles.form}>
      <TextField
        id="outlined-crypto-code"
        label="CRYPTOCURRENCY CODE"
        size="small"
        value={cryptoCode}
        InputProps={inputProps}
        InputLabelProps={inputLabelProps}
        variant="outlined"
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleButtonClick}>Add</button>
      </form>
      <p className={`${styles['small-text']} ${styles['disclaimer']}`}>Use of this service is subject to terms and conditions.</p>
    </div>
  )
}

export default TrackerForm;