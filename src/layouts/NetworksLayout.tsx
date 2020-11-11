import React from 'react';

import { Network } from '../components/Network';

interface INetworks {
  networks: object[];
  clickHandler: (index: number, id: string) => void;
  selected: number;
}

export const NetworksLayout = ({
  networks,
  clickHandler,
  selected,
}: INetworks) => {
  return (
    <div>
      {networks.map((el: any, index: number) => (
        <Network
          onClick={() => clickHandler(index, el.id)}
          key={index}
          names={el.company}
          selected={selected === index ? true : false}
        />
      ))}
    </div>
  );
};
