import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledDiv = styled('div')`
  h1 {
    margin-left: 45px;
    color: #36034b;
  }

  li {
    list-style-type: none;
    font-size: 18px;
    font-weight: 400;
    padding: 2px;
    text-decoration: none;
    line-height: 1.5em;
  }
`;

export const StyledLink = styled(Link)`
  color: #20012c;
  padding: 6px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  scale: 1.5;

  &:hover {
    color: #2c9e78;
    text-transform: uppercase;
  }
`;
