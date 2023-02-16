import type { FC } from 'react';
import { useRecoilState } from 'recoil';

import { networkInfoState } from '../atoms/networkInfoState';
import type { NetworkInfo } from '../models/networkInfo';

type Props = {
  networkInfoProperty: keyof NetworkInfo;
};

const TranslatedResultText: FC<Props> = ({ networkInfoProperty }: Props) => {
  const [networkInfo, _] = useRecoilState(networkInfoState);

  const getValue = () => {
    switch (networkInfoProperty) {
      case 'address':
        return networkInfo.address;
      case 'subnet':
        return networkInfo.subnet;
    }
  };

  return (
    <div>
      <h2 className='font-bold h-5 leading-5'>{networkInfoProperty}</h2>
      <input value={getValue()} className='h-8 w-full leading-8 pl-3 bg-white rounded text-black' readOnly />
    </div>
  );
};

export { TranslatedResultText };
