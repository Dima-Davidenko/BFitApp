import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavlink = styled(NavLink)`
  @media screen and (min-width: ${p => p.theme.breakpoints.values.tablet}px) {
    margin-left: 24px;
  }
  &.active {
    color: #212121;
  }
`;
