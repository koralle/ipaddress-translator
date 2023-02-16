import { zodResolver } from '@hookform/resolvers/zod';
import * as Label from '@radix-ui/react-label';
import { FC, useId } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import TranslateIcon from '../assets/translate.svg';
import { errorState, NO_ERROR } from '../atoms/errorState';
import { networkInfoState } from '../atoms/networkInfoState';
import type { IPv4AddressFormSchemaType, NetworkInfo } from '../models/networkInfo';
import { IPv4AddressFormSchema } from '../models/networkInfo';
import { Button } from './Button';
import { ErrorMessage } from './ErrorMessage';

type Props = {
  onSubmit: (data: IPv4AddressFormSchemaType) => Promise<NetworkInfo>;
};

const IPv4AddressForm: FC<Props> = ({ onSubmit }: Props) => {
  const inputElementId = useId();
  const { register, handleSubmit } = useForm<IPv4AddressFormSchemaType>({
    resolver: zodResolver(IPv4AddressFormSchema),
  });

  const [_, setNetworkInfo] = useRecoilState(networkInfoState);
  const [error, setError] = useRecoilState(errorState);

  const onSubmitForm = async (data: IPv4AddressFormSchemaType) => {
    try {
      const res = await onSubmit(data);
      setError(NO_ERROR);
      setNetworkInfo(res);
    } catch (e: unknown) {
      if (typeof e === 'string') {
        setError(e);
        setNetworkInfo({ address: '', subnet: '' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(async data => await onSubmitForm(data))} className='grid w-full h-33 grid-rows-4'>
      <Label.Root htmlFor={inputElementId} aria-label='IPv4 Address:' className='w-full font-bold'>
        IPv4Address:
      </Label.Root>
      <ErrorMessage message={error} />
      <input
        id={inputElementId}
        {...register('ipv4Address')}
        aria-label='Type IPv4Address here...'
        className='bg-white rounded pl-3 font-main text-black font-medium'
      />
      <Button
        type='submit'
        className='inline-flex flex-row justify-center items-center gap-x-1 w-form h-8 mt-4 bg-color-accent text-color-text-accent font-semibold rounded'
      >
        <TranslateIcon width={16} height={16} stroke='#002925' />
        <span className='h-8 leading-8'>Translate</span>
      </Button>
    </form>
  );
};

export { IPv4AddressForm };
