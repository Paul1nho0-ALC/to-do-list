import styled from 'styled-components';
import { CheckIcon } from '../../icons/Check-Icon';
import P from 'prop-types';
import './style.css';

const MyCheckbox = styled.div`
    min-width: 24px;
    min-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
`;

export const Checkbox = (props) => {
  return (
    <MyCheckbox
      className={props.isChecked ? 'checked' : 'unchecked'}
      onClick={() => {
        props.handleClick(props.isChecked);
      }}
    >
      {props.isChecked ? <CheckIcon /> : ''}
    </MyCheckbox>
  );
};

Checkbox.propTypes = {
  handleClick: P.func,
  isChecked: P.bool,
};
