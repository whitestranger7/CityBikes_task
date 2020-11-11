import React, { useEffect, useState, useCallback } from 'react';
import axios from '../config/axios';
import Loader from 'react-loader-spinner';
import styles from '../styles/stations.module.scss';

import { Station } from '../components/Station';

interface IStationsLayout {
  id: string | undefined;
}

export const StationsLayout = ({ id }: IStationsLayout) => {
  const [data, setData] = useState<any>();

  const likedStorageRef: string | null = localStorage.getItem('liked');
  const likedStorage: string[] = likedStorageRef
    ? JSON.parse(likedStorageRef)
    : [];

  const [liked, setLiked] = useState(likedStorage);

  useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    if (id) {
      (async () => {
        const params = {
          fields: 'stations',
        };
        const data = await axios.get(`/networks/${id}`, { params });
        setData(data.data.network);
      })();
    }
  }, [id]);

  const likeHandler = useCallback(
    (id) => {
      const newLikedArr = liked.slice();
      if (liked.includes(id)) {
        const newLikedData = newLikedArr.filter((el) => el !== id);
        setLiked(newLikedData);
      } else {
        newLikedArr.push(id);
        setLiked(newLikedArr);
      }
    },
    [liked]
  );

  return (
    <>
      {data ? (
        data.stations.map(
          (
            el: { name: string; id: string; free_bikes: number },
            index: number
          ) => (
            <Station
              key={index}
              name={el.name}
              onClick={() => likeHandler(el.id)}
              bikesNumber={el.free_bikes}
              liked={liked.includes(el.id) ? true : false}
            />
          )
        )
      ) : (
        <div className={styles.stations__preloader}>
          <Loader type='Oval' color='#00BFFF' height={80} width={80} />
        </div>
      )}
    </>
  );
};
