import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #4c0369;
  padding: 10px;
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  &.active {
    color: #14855f;
  }
`;

export const StyledApp = styled('div')`
  padding: 50px 200px;
`;

export const StyledHeader = styled('div')`
  padding: 30px;
  background-color: rgb(175, 198, 199);
  border-radius: 10px;
`;
