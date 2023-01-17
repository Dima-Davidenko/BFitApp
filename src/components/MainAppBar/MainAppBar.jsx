import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBarStyles,
  AppLogInButton,
  AppLogoSlimMomStyles,
  AppLogoStyles,
  AppRegistButton,
  MobMenuStyles,
  StyledSlimMomImg,
  SvgIconStyles,
} from './MainAppBar.styles';
import { ReactComponent as AppLogo } from '../../assets/logo.svg';
// import { ReactComponent as AppLogoSlimMom } from '../../assets/slimMom.svg';
import { SvgIcon } from '@mui/material';
import AppLogoSlimMom from '../../assets/slimMom.svg';

const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={AppBarStyles}>
        <Toolbar>
          <SvgIcon component="div" sx={SvgIconStyles}>
            <AppLogo sx={AppLogoStyles} />
            <StyledSlimMomImg src={AppLogoSlimMom} />
          </SvgIcon>
          {/* <Box component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <AppLogoFull sx={AppLogoSlimMomStyles} />
          </Box> */}
          <Box
            sx={{
              display: 'flex',
              alignItems: {
                xs: 'flex-end',
              },
            }}
          >
            <Button sx={AppLogInButton}>Log In</Button>
            <Button sx={AppRegistButton}>Registration</Button>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={MobMenuStyles}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainAppBar;
