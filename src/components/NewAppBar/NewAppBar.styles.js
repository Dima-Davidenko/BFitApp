import { NavLink } from 'react-router-dom';

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
export const StyledMobileMenu = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  height: calc(100% - 80px);
  align-items: center;
  background-color: #264061;
  z-index: 1200;
  @media screen and (min-width: 768px) {
    padding-top: 90px;
  }
`;

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
  white-space: nowrap;
  &.active {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    padding: 20px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
