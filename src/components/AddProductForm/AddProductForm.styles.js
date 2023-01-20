import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  display: ${p => (p.modalForm ? 'block' : 'none')};
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
