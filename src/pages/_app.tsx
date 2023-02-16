import '../style.css';

import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { Layout } from '../components/layout';

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default MyApp;
