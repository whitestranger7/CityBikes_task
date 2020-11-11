import React, { useEffect, useState, useCallback } from 'react';
import styles from './styles/app.module.scss';
import axios from './config/axios';

import { NetworksLayout } from './layouts/NetworksLayout';
import { StationsLayout } from './layouts/StationsLayout';
import { INetworks } from './interfaces/INetworks';
import { Network } from './components/Network';

export const App = () => {
  const [networks, setNetworks] = useState<INetworks>({
    items: [],
    hasMoreItems: true,
    selected: {
      index: 0,
      id: '',
    },
  });

  const [liked, setLiked] = useState<string[]>([]);

  useEffect(() => {
    if (networks.items.length === 0) {
      (async () => {
        const params = {
          fields: 'id,company',
        };
        const data = await axios.get('/networks', { params });
        setNetworks({
          ...networks,
          items: data.data.networks,
          selected: { index: 0, id: data.data.networks[0].id },
        });
      })();
    }
  }, [networks]);

  const clickHandler = useCallback(
    (index, id) => {
      setNetworks({ ...networks, selected: { index, id } });
    },
    [networks]
  );

  const likeHandler = useCallback(
    (id) => {
      let newData = liked.slice();
      if (liked.includes(id)) {
        const filteredData = newData.filter((el) => el !== id);
        setLiked(filteredData);
      } else {
        newData.push(id);
        setLiked(newData);
      }
    },
    [liked]
  );

  return (
    <div className={styles.app}>
      <div className={`${styles.section} ${styles.networks}`}>
        <NetworksLayout
          networks={networks.items}
          clickHandler={clickHandler}
          selected={networks.selected.index}
        />
      </div>
      <div className={`${styles.section} ${styles.stations}`}>
        <StationsLayout
          id={networks.selected.id}
          onSectionClick={likeHandler}
          liked={liked}
        />
      </div>
    </div>
  );
};
