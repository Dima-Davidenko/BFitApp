import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const SvgIconStyles = {
  flexGrow: '1',
  display: 'flex',
  alignItems: {
    tablet: 'center',
    laptop: 'end',
  },
  marginTop: {
    tablet: '20px',
  },
  marginLeft: {
    tablet: '15px',
    laptop: '0px',
  },
  cursor: 'pointer',
};
export const AppLogoStyles = {
  display: 'flex',
  position: 'realitive',
  width: {
    mobile: '46px',
    tablet: '46px',
    laptop: '167px',
  },
  height: {
    mobile: '44px',
    tablet: '44px',
    laptop: '71px',
  },
};
export const StyledSlimMomImg = styled.img`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.values.tablet}px) {
    display: block;
    width: 105px;
    height: 16px;
    margin-left: 10px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.values.laptop}px) {
    position: absolute;
    margin-left: 37px;
  }
`;
export const AppBarStyles = {
  width: '100%',
  // {
  //   mobile: '100%',
  //   tablet: '100%',
  //   laptop: '400px',
  // },
  paddingTop: {
    laptop: '80px',
  },
  color: 'black',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: {
    mobile: '4px solid #E0E0E0',
    laptop: 'none',
  },
  height: {
    mobile: '80px',
    laptop: '160px',
  },
};
export const AppLogInButton = {
  flexGrow: '1',
  width: '60px',
  textDecoration: 'none',
  marginLeft: {
    mobile: '32px',
    tablet: '0px',
    laptop: '0px',
  },
  display: { mobile: 'none', laptop: 'flex' },
  flexGrow: '1',
  height: '17px',
  letterSpacing: '0.04em',
  fontFamily: 'Verdana',
  fontWeight: '700',
  fontSize: '14px',
  lineHeighte: '17px',
  color: '#212121',
};
// export const AppRegistButton = {
//   textDecoration: 'none',
//   flexGrow: '1',
//   letterSpacing: '0.04em',
//   fontFamily: 'Verdana',
//   fontWeight: '700',
//   fontSize: '14px',
//   lineHeighte: '17px',
//   color: '#9B9FAA',
//   marginTop: '30px',
//   marginLeft: {
//     mobiles: '14px',
//     tablet: '24px',
//   },
// };

export const StyledNavlink = styled(NavLink)`
  @media screen and (min-width: ${p => p.theme.breakpoints.values.tablet}px) {
    margin-left: 24px;
  }
  &.active {
    color: #212121;
  }
`;
