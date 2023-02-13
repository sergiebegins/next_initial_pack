import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
