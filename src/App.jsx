import { useEffect, useRef, useState } from 'react';
import WebFont from 'webfontloader';
import { Header } from './components/Header';
import { ToDoContainer } from './components/ToDoContainer';
import { NewTask } from './components/NewTask';

import styled from 'styled-components';
import { ToDoContent } from './components/ToDoContent';
import { ToDoItem } from './components/ToDoItem';
import { useLocalStorage } from './hooks/useLocalStorage';

const Container = styled.div`
  background-color: var(--background-color) ;
  min-height: 100vh;
  padding-bottom: 64px;
`;

export const App = () => {
  const [data, setData] = useState([]);
  //eslint-disable-next-line
  const [placeholder, getItems, deleteItem] = useLocalStorage();

  const getItemsRef = useRef(getItems());

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:400,700'],
      },
    });
  }, []);

  const handleUpdate = (values) => {
    setData(values);
  };

  useEffect(() => {
    setData(getItemsRef.current);
  }, []);

  return (
    <Container>
      <Header />

      <ToDoContainer>
        <NewTask update={handleUpdate} />
        <ToDoContent>
          {data.map((i) => {
            const item = JSON.parse(i);
            return (
              <ToDoItem
                id={item.id}
                remove={deleteItem}
                key={item.id}
                text={item.text}
                update={handleUpdate}
              />
            );
          })}
        </ToDoContent>
      </ToDoContainer>
    </Container>
  );
};
