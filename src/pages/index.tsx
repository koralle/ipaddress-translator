import type { FC } from 'react';

import { IPv4AddressForm } from '../components/IPv4AddressForm';
import { TranslatedResultText } from '../components/TranslatedResultText';
import { invokeTranslate } from '../invokeCommands/translate';

const App: FC = () => {
  const description = 'Type IPv4 Address you want to translate...';

  return (
    <article
      className='grid justify-self-center w-card h-card mt-5 bg-color-main-bg rounded-form-card-radius'
      aria-label={`${description}`}
    >
      <section className='w-form h-form grid grid-rows-form gap-y-4 mt-4 justify-self-center'>
        <h1 className='w-full h-5 text-center font-main'>Type IPv4 Address you want to translate...</h1>
        <IPv4AddressForm onSubmit={invokeTranslate} />
      </section>
      <section className='grid-cols-1 justify-self-center'>
        <h1 className='font-bold w-full text-center'>Translated</h1>

        <div className='grid justify-self-center w-form grid-row-2 gap-y-3'>
          <TranslatedResultText networkInfoProperty='address' />
          <TranslatedResultText networkInfoProperty='subnet' />
        </div>
      </section>
    </article>
  );
};

export default App;
