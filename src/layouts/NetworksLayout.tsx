import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';
import styles from '../styles/networks.module.scss';

import { Network } from '../components/Network';
import { updateSelectedAction } from '../store/actions/networkActions';

interface INetworks {
  networks: object[];
  selected: number;
}

export const NetworksLayout = ({ networks, selected }: INetworks) => {
  const dispatch = useDispatch();

  const selectedHandler = useCallback(
    (index, id) => {
      dispatch(updateSelectedAction(index, id));
    },
    [dispatch]
  );

  return (
    <div>
      {networks.length > 0 ? (
        networks.map((el: any, index: number) => (
          <Network
            onClick={() => selectedHandler(index, el.id)}
            key={index}
            names={el.company}
            selected={selected === index ? true : false}
          />
        ))
      ) : (
        <div className={styles.networks__preloader}>
          <Loader type='Oval' color='#00BFFF' height={80} width={80} />
        </div>
      )}
    </div>
  );
};
