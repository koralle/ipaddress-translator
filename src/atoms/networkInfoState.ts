import { atom } from 'recoil';

import type { NetworkInfo } from '../models/networkInfo';

const networkInfoState = atom<NetworkInfo>({
  key: 'networkInfoState',
  default: {
    address: '',
    subnet: '',
  },
});

export { networkInfoState };
