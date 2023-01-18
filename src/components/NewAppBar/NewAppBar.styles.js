const { default: styled } = require('@emotion/styled');

export const StyledSlimMom = styled.img`
  display: ${p => (p.isLoggedIn ? 'inline-block' : 'none')};
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
export const StyledUserMenuContainer = styled.div`
  display: ${p => (p.isLoggedIn ? 'block' : 'none')};
  width: 100%;
  height: 40px;
  background-color: #eff1f3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
