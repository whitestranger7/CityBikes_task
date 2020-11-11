import React, { useEffect, useState, useCallback } from 'react';
import axios from '../config/axios';

import { Network } from '../components/Network';

interface INetworks {
  networks: object[];
  clickHandler: (index: number) => void;
  selected: number;
}

export const NetworksLayout = ({
  networks,
  clickHandler,
  selected,
}: INetworks) => {
  return (
    <div className='tracks'>
      {networks.map((el: any, index: number) => (
        <Network
          onClick={() => clickHandler(index)}
          key={index}
          names={el.company}
          selected={selected === index ? true : false}
        />
      ))}
    </div>
  );
};
