import { invoke } from '@tauri-apps/api/tauri';

import type { IPv4AddressFormSchemaType, NetworkInfo } from '../models/networkInfo';
import { isClient } from '../utils';

const invokeTranslate = async (data: IPv4AddressFormSchemaType): Promise<NetworkInfo> => {
  if (!isClient) {
    new Error('');
  }

  return invoke<NetworkInfo>('translate', { value: data.ipv4Address });
};

export { invokeTranslate };
