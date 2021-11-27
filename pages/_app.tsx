import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TypesafeI18n from '../src/i18n/i18n-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TypesafeI18n initialLocale="en">
      <Component {...pageProps} />
    </TypesafeI18n>
  );
}

export default MyApp;
