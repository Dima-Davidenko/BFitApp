import styled from '@emotion/styled';

export const SvgIconStyles = {
  flexGrow: '1',
  display: 'flex',
  alignItems: {
    md: 'center',
    lg: 'end',
  },
  width: {
    xs: '44px',
    md: '162px',
    lg: '167px',
  },
  height: {
    xs: '44px',
    md: '44px',
    lg: '66px',
  },
};

export const AppLogoStyles = {
  position: 'realitive',
};

export const StyledSlimMomImg = styled.img`
  display: none;
  @media screen and (min-width: ${p => p.theme.breakpoints.values.md}px) {
    display: block;
  }
`;

export const AppBarStyles = {
  width: {
    lg: '300px',
  },
  pt: {
    lg: '80px',
  },
  color: 'black',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  borderBottom: {
    xs: '4px solid #E0E0E0',
    lg: 'none',
  },
  height: {
    xs: '80px',
    lg: '160px',
  },
};
export const AppLogInButton = {
  pt: '38px',
  pr: '0px',
  pl: '0px',
  pb: {
    xs: '36px',
    sm: '36px',
    md: '36px',
  },
  ml: {
    xs: '32px',
    sm: '0px',
    md: '0px',
  },
  flexGrow: '1',
  width: '60px',
  height: '17px',
  letterSpacing: '0.04em',
  fontFamily: 'Verdana',
  fontWeight: '700',
  fontSize: '14px',
  lineHeighte: '17px',
  color: '#212121',
};
export const AppRegistButton = {
  pt: '38px',
  pb: '23px',
  pr: '0px',
  pl: '0px',
  ml: {
    xs: '14px',
    md: '24px',
    lg: '24px',
  },
  flexGrow: '1',
  letterSpacing: '0.04em',
  fontFamily: 'Verdana',
  fontWeight: '700',
  fontSize: '14px',
  lineHeighte: '17px',
  color: '#9B9FAA',
};
export const MobMenuStyles = {
  display: {
    xs: 'none',
    lg: 'none',
  },
};
