import styled from 'styled-components';
import { Checkbox } from '../Checkbox';
import { useState } from 'react';
import { TrashIcon } from '../../icons/Trash-Icon';
import './style.css';

import P from 'prop-types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Item = styled.div`
    width: 100%;
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `;

const DeleteButton = styled.button`
    border: none;
    background: transparent;
    width: 24px;
    height: 24px;
    cursor: pointer;
  `;

const ItemDesciption = styled.p`
    font-size: 16px;
    font-weight: 700;
  `;

export const ToDoItem = ({ id, text, remove, update }) => {
  const [isComplete, setIsComplete] = useState(false);

  //eslint-disable-next-line
  const [placeholder, getItems] = useLocalStorage();

  const handleClick = () => {
    setIsComplete(!isComplete);
  };

  return (
    <Item className={isComplete ? 'complete' : 'uncomplete'}>
      <Group>
        <Checkbox isChecked={isComplete} handleClick={handleClick} />
        <ItemDesciption>{text}</ItemDesciption>
      </Group>

      <Group>
        <DeleteButton
          onClick={() => {
            remove(id);
            update(getItems());
          }}
        >
          <TrashIcon isComplete={isComplete} />
        </DeleteButton>
      </Group>
    </Item>
  );
};

ToDoItem.propTypes = {
  text: P.string,
  remove: P.func,
  update: P.func,
  id: P.number,
};
