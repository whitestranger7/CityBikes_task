import React, { useEffect, useState } from 'react';
import axios from '../config/axios';

import { Station } from '../components/Station';

interface IStationsLayout {
  id: string | undefined;
  onSectionClick: (id: string) => void;
  liked: string[];
}

export const StationsLayout = ({
  id,
  onSectionClick,
  liked,
}: IStationsLayout) => {
  const [data, setData] = useState<any>();

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
              onClick={() => onSectionClick(el.id)}
              bikesNumber={el.free_bikes}
              liked={liked.includes(el.id) ? true : false}
            />
          )
        )
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
