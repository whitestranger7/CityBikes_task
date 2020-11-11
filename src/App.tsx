import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles/app.module.scss';
import axios from './config/axios';
import { useSelector, useDispatch } from 'react-redux';

import { NetworksLayout } from './layouts/NetworksLayout';
import { StationsLayout } from './layouts/StationsLayout';
import { getNetworks } from './store/selectors';
import {
  getNetworksAction,
  updateSelectedAction,
} from './store/actions/networkActions';

export const App = () => {
  const dispatch = useDispatch();

  const networks = useSelector(getNetworks);

  useEffect(() => {
    if (networks.items.length === 0) {
      (async () => {
        const params = {
          fields: 'id,company',
        };
        const data = await axios.get('/networks', { params });
        dispatch(getNetworksAction(data.data.networks));
      })();
    }
  }, [dispatch, networks.items.length]);

  return (
    <div className={styles.app}>
      <div className={`${styles.section} ${styles.networks}`}>
        <NetworksLayout
          networks={networks.items}
          selected={networks.selected.index}
        />
      </div>
      <div className={`${styles.section} ${styles.stations}`}>
        <StationsLayout id={networks.selected.id} />
      </div>
    </div>
  );
};
