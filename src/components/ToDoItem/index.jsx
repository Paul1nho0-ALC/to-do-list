import styled from 'styled-components';
import { Checkbox } from '../Checkbox';
import { useState } from 'react';
import { TrashIcon } from '../../icons/Trash-Icon';
import './style.css';

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
  `;

export const ToDoItem = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleClick = () => {
    setIsComplete(!isComplete);
  };

  return (
    <Item className={isComplete ? 'complete' : 'uncomplete'}>
      <Group>
        <Checkbox isChecked={isComplete} handleClick={handleClick} />
        <p>Testeeee</p>
      </Group>

      <Group>
        <DeleteButton>
          <TrashIcon isComplete={isComplete} />
        </DeleteButton>
      </Group>
    </Item>
  );
};
