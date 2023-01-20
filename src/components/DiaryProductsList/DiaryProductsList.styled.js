import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: scroll;
  width: 100%;
  @media (min-width: 426px) {
    overflow-y: scroll;
    height: 244px;
  }
  @media (min-width: 768px) {
    margin-bottom: 60px;
    overflow-y: scroll;
    height: 244px;
  }
  &.hidden {
    overflow: hidden;
  }
`;
