import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  width: 100%;
  height: 244px;
  &.hidden {
    overflow: hidden;
  }
`;
