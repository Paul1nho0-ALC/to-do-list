import { ListIcon } from '../../icons/listIcon';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    padding: 32px 64px;
    background-color: var(--primary-color);
    display: flex;
    align-items: center; 
    justify-content: start;
    gap: 32px;
`;

const Logo = styled.h1`
color: #ffffff;
font-weight: 700;
font-size: 48px;
`;

export const Header = () => {
  return (
    <HeaderDiv>
      <ListIcon />
      <Logo>TO DO LIST</Logo>
    </HeaderDiv>
  );
};
