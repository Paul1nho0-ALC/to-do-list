import styled from 'styled-components';

import P from 'prop-types';

const Container = styled.main`
    min-height: 400px;
    max-width: 360px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin: 64px auto 0 auto;
    padding: 32px 16px;
    background-color: #ffffff; 
    border-radius: 8px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

    @media screen and (min-width: 720px) {
      min-height: 400px;
      max-width: 640px;
      margin: 128px auto 0 auto;
      padding: 48px 32px;
    }
`;

export const ToDoContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

ToDoContainer.propTypes = {
  children: P.node,
};
