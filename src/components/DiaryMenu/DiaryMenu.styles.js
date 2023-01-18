import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  padding: 10px;
  height: 30px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-family: Verdana;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #9b9faa;
  &.active {
    color: #212121;
  }
`;
