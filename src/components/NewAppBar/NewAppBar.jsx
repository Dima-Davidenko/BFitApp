import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import css from './NewAppBar.module.scss';
import logoBaba from '../../assets/logo.svg';
import slimMom from '../../assets/slimMom.svg';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { StyledSlimMom, StyledUserMenuContainer } from './NewAppBar.styles';
import DiaryMenu from 'components/DiaryMenu/DiaryMenu';

const NewAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className={css.header}>
        <div className={css.logoWrapper}>
          <img className={css.logoBaba} src={logoBaba} alt="logo" />
          <StyledSlimMom
            isLoggedIn={isLoggedIn}
            className={css.slimMom}
            src={slimMom}
            alt="logo"
          />
        </div>
        {!isLoggedIn && <AuthMenu />}
        {isLoggedIn && <DiaryMenu />}
        {isLoggedIn && (
          <>
            <UserMenu />
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { mobile: 'flex', laptop: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </header>
      <StyledUserMenuContainer isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default NewAppBar;
