import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledUl = styled('ul')`
  padding: 0;
`;

export const StyledLink = styled(Link)`
  color: #20012c;
  padding: 6px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  &:hover {
    color: #2c9e78;
    text-transform: uppercase;
  }
`;

export const StyledLi = styled('li')`
  line-height: 1.5em;
  margin-left: 15px;
`;
