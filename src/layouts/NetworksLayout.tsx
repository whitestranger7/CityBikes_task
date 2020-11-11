import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

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
      {networks.map((el: any, index: number) => (
        <Network
          onClick={() => selectedHandler(index, el.id)}
          key={index}
          names={el.company}
          selected={selected === index ? true : false}
        />
      ))}
    </div>
  );
};
