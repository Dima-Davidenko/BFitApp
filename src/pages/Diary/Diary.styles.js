import styled from '@emotion/styled';

export const StyledFormMenuWrapper = styled.div`
  /* display: ${p => (p.modalForm ? 'flex' : 'none')}; */
  padding: 50px 20px;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 120px;
  left: 0;
  width: 100%;
  height: calc(100% - 120px);
  align-items: center;
  background-color: #ffffff;
  z-index: 5;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
`;

export const StyledBackBtn = styled.div`
  background-image: url(${p => p.source});
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  width: 30px;
  height: 30px;
  position: absolute;
  top: -85px;
  left: 10px;
`;
