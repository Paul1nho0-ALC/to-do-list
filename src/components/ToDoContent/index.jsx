import styled from 'styled-components';
import P from 'prop-types';

const Content = styled.div`
    padding-right: 96px;
    margin-top: 64px;
    width: 100%;
`;

export const ToDoContent = ({ children }) => {
  return <Content>{children}</Content>;
};

ToDoContent.propTypes = {
  children: P.node,
};
