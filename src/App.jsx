import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { Header } from './components/Header';
import { ToDoContainer } from './components/ToDoContainer';
import { NewTask } from './components/NewTask';

import styled from 'styled-components';

const Container = styled.div`
background-color: var(--background-color) ;
min-height: 100vh;
min-width: 100vh;
`;

export const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat:400,700'],
      },
    });
  }, []);
  return (
    <Container>
      <Header />
      <ToDoContainer>
        <NewTask />
      </ToDoContainer>
    </Container>
  );
};
