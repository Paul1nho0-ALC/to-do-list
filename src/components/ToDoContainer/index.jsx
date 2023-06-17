import styled from 'styled-components';

import P from 'prop-types';

const Container = styled.main`
    min-height: 400px;
    max-width: 640px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 128px auto 0 auto;
    padding: 48px 32px;
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
