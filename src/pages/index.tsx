import type { FC } from 'react';

import { Header } from '../components/Header';
import { IPAddressV4Form } from '../components/IPAddressV4Form';

const App: FC = () => {
  return (
    <>
      <Header title='ipaddress-translator' />
      <main id='main' aria-label='app main body' className='grid'>
        <IPAddressV4Form />
      </main>
    </>
  );
};

export default App;
