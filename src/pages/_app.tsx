import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import '../app/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;