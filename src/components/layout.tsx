import type { FC, ReactNode } from 'react';

import { Header } from './Header';

type Props = {
  children?: ReactNode;
};
const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className='min-w-index min-h-index'>
      <Header title='IPAddress Translator' />
      <main id='main' aria-label='app main body' className='grid bg-color-sub-bg'>
        {children}
      </main>
    </div>
  );
};

export { Layout };
