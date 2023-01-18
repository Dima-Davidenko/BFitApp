import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIcon } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { ReactComponent as AppLogo } from '../../assets/logo.svg';
import AppLogoSlimMom from '../../assets/slimMom.svg';
import css from './MainAppBar.module.scss';
import {
  AppBarStyles,
  AppLogoStyles,
  StyledNavlink,
  StyledSlimMomImg,
  SvgIconStyles,
} from './MainAppBar.styles';

const MainAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={AppBarStyles}>
        <Toolbar>
          <SvgIcon
            onClick={() => navigate('/')}
            component="div"
            sx={SvgIconStyles}
          >
            <AppLogo sx={AppLogoStyles} />
            <StyledSlimMomImg src={AppLogoSlimMom} />
          </SvgIcon>
          <Box
            sx={{
              display: 'flex',
              alignItems: {
                mobile: 'flex-end',
              },
            }}
          >
            {!isLoggedIn && (
              <>
                <StyledNavlink className={css.navlink} to="/login">
                  Log In
                </StyledNavlink>
                <StyledNavlink className={css.navlink} to="/registration">
                  Registration
                </StyledNavlink>
              </>
            )}
            {isLoggedIn && (
              <>
                <UserMenu />
                <div className={css.menulinks}>
                  <StyledNavlink className={css.navlink} to="/diary">
                    Diary
                  </StyledNavlink>
                  <StyledNavlink className={css.navlink} to="/calculator">
                    Calculator
                  </StyledNavlink>
                </div>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ display: { mobile: 'flex', laptop: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>

                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="close"
                  sx={{ display: { mobile: 'none', laptop: 'none' } }}
                >
                  <CloseIcon />
                </IconButton>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MainAppBar;
