import styled from 'styled-components';
import { AddIcon } from '../../icons/Add-Icon';

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

export const NewTask = () => {
  return (
    <Container>
      <TextInput onClick={() => console.log('teste')} />
      <AddButton>
        <AddIcon />
      </AddButton>
    </Container>
  );
};
