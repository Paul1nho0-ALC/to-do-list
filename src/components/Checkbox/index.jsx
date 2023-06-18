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
    background-color: #f2f2f2;
    cursor: pointer;
`;

export const Checkbox = (props) => {
  return (
    <MyCheckbox
      className={props.isChecked ? 'checked' : ''}
      onClick={() => {
        props.handleClick(props.isChecked);
      }}
    >
      {props.isChecked ? <CheckIcon /> : null}
    </MyCheckbox>
  );
};

Checkbox.propTypes = {
  handleClick: P.func,
  isChecked: P.bool,
};
