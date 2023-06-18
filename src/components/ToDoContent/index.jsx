import styled from 'styled-components';
import P from 'prop-types';

const Content = styled.div`
    padding-right: 96px;
    margin-top: 64px;
    width: 100%;

    @media screen and (max-width: 720px) {
     padding-right: 16px 
    }
`;

export const ToDoContent = ({ children }) => {
  return <Content>{children}</Content>;
};

ToDoContent.propTypes = {
  children: P.node,
};
