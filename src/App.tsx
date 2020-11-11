import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles/app.module.scss';
import axios from './config/axios';

import { NetworksLayout } from './layouts/NetworksLayout';
import { StationsLayout } from './layouts/StationsLayout';
import { INetworks } from './interfaces/INetworks';

export const App = () => {
  const [networks, setNetworks] = useState<INetworks>({
    items: [],
    hasMoreItems: true,
    selected: 0,
  });

  useEffect(() => {
    if (networks.items.length === 0) {
      (async () => {
        const params = {
          fields: 'id,company',
        };
        const data = await axios.get('/networks', { params });
        setNetworks({ ...networks, items: data.data.networks });
      })();
    }
  }, [networks]);

  const clickHandler = useCallback(
    (index) => {
      setNetworks({ ...networks, selected: index });
    },
    [networks]
  );

  return (
    <div className={styles.app}>
      <div className={`${styles.section} ${styles.networks}`}>
        <NetworksLayout
          networks={networks.items}
          clickHandler={clickHandler}
          selected={networks.selected}
        />
      </div>
      <div className={`${styles.section} ${styles.stations}`}>
        {/* <StationsLayout /> */}
      </div>
    </div>
  );
};
