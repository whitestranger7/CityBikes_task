import React from 'react';
import styles from '../styles/networks.module.scss';

interface INetwork {
  names: string[] | string;
  onClick: () => void;
  selected: boolean;
}

export const Network = ({ names, onClick, selected }: INetwork) => {
  return (
    <div
      className={`${styles.network__wrapper} ${selected && styles.selected}`}
      onClick={onClick}
    >
      <div>
        <div className={styles.network__company}>
          {typeof names === 'string' ? (
            <p>{names.length}</p>
          ) : (
            names && names.map((el, index) => <p key={index}>{`${el}`}</p>)
          )}
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
