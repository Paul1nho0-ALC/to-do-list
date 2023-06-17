import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { Header } from './components/Header';

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:400,700'],
      },
    });
  }, []);
  return <Header />;
};
