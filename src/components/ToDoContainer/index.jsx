import styled from 'styled-components';

import P from 'prop-types';

const Container = styled.main`
    min-height: 400px;
    max-width: 640px;
    display: flex;
    margin: 128px auto 0 auto;
    align-items: start;
    padding: 48px 32px;
    justify-content: start;
    background-color: #ffffff; 
    border-radius: 8px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const ToDoContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

ToDoContainer.propTypes = {
  children: P.node,
};
