import { invoke } from '@tauri-apps/api/tauri';
import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

import { isClient } from '../utils';
import { Button } from './Button';
import { Input } from './Input';

type NetworkInfo = {
  address: string;
  subnet: string;
};

const invokeTranslate = async (inputValue: string): Promise<NetworkInfo> => {
  if (!isClient) {
    new Error('');
  }

  return invoke<NetworkInfo>('translate', { value: inputValue });
};

const IPAddressV4Form: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [subnet, setSubnet] = useState<string>('');

  return (
    <form
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        invokeTranslate(inputValue)
          .then(info => {
            setAddress(_ => info.address);
            setSubnet(_ => info.subnet);
            return;
          })
          .catch(e => console.log(e));
      }}
    >
      <Input
        value={inputValue}
        type='text'
        name='ipv4-address-input-field'
        aria-label='ipv4-address-input-field'
        onChange={e => {
          setInputValue(_ => e.target.value);
        }}
      />

      <Button type='submit'>Submit</Button>
      <p>{address}</p>
      <p>{subnet}</p>
    </form>
  );
};

export { IPAddressV4Form };
