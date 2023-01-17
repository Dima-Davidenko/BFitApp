import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  @media (min-width: 426px) and (max-width: 1023px) {
    overflow-y: scroll;
    height: 244px;
    max-width: 610px;
  }
  @media (min-width: 1024px) {
    width: 610px;
    overflow-y: scroll;
    height: 244px;
  }
  &.hidden {
    overflow: hidden;
  }
`;
