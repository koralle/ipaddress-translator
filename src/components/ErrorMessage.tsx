import type { FC } from 'react';

import ErrorIcon from '../assets/error_FILL1_wght400_GRAD0_opsz20.svg';
import { NO_ERROR } from '../atoms/errorState';

type Props = {
  message?: string;
};

const ErrorMessage: FC<Props> = ({ message }: Props) => {
  const hasError = message !== NO_ERROR;

  return (
    <div className='grid grid-cols-error-message-with-icon gap-x-1'>
      {hasError ? (
        <>
          <ErrorIcon width={20} height={20} fill='#f87272' />
          <span className='text-color-text-error h-5 leading-5'>{message ? message : ''}</span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export { ErrorMessage };
