import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  display: ${p => (p.modalForm ? 'block' : 'none')};
  @media screen and (min-width: 768px) {
    min-width: 808px;
    display: block;
  }
`;
