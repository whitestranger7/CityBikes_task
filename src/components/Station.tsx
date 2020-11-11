import React from 'react';
import styles from '../styles/stations.module.scss';
import Heart from '../assets/icons/heart.svg';
import LikedHeart from '../assets/icons/heart_liked.svg';

interface IStation {
  name: string;
  onClick: () => void;
  bikesNumber: number;
  liked: boolean;
}

export const Station = ({ name, onClick, bikesNumber, liked }: IStation) => (
  <div className={styles.station__wrapper} onClick={onClick}>
    <div className={styles.station__name}>{name && name}</div>
    <div className={styles.station__bikes}>{`Bikes available: ${
      bikesNumber ? bikesNumber : 0
    }`}</div>
    <div className={styles.station__heart}>
      <img
        src={liked ? LikedHeart : Heart}
        alt={liked ? 'liked_heart' : 'heart'}
      />
    </div>
  </div>
);
