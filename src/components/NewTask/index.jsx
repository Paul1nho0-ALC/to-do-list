import styled from 'styled-components';
import { AddIcon } from '../../icons/Add-Icon';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useRef, useState } from 'react';

import P from 'prop-types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  width: 480px;
  height: 48px;
  background-color: var(--background-color);
  padding: 24px;
  border-radius: 16px;
`;

const AddButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background-color: var(--primary-color);
  cursor: pointer;
  transition: all ease-in .3s;

  &:hover{
    background-color: var(--secondary-color);
  }
`;

export const NewTask = ({ update }) => {
  //eslint-disable-next-line
  const [ setItem, getItems ] = useLocalStorage();
  const [value, setValue] = useState('');

  const inputRef = useRef();

  return (
    <Container>
      <TextInput
        ref={inputRef}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <AddButton
        onClick={() => {
          setItem(value);
          inputRef.current.value = '';
          setValue('');
          update(getItems());
        }}
      >
        <AddIcon />
      </AddButton>
    </Container>
  );
};

NewTask.propTypes = {
  update: P.func,
};
