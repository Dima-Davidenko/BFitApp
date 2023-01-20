import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import css from './NewAppBar.module.scss';
import logoBaba from '../../assets/logo.svg';
import slimMom from '../../assets/slimMom.svg';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import {
  StyledMobileMenu,
  StyledNavLink,
  StyledSlimMom,
  StyledUserMenuContainer,
} from './NewAppBar.styles';
import DiaryMenu from 'components/DiaryMenu/DiaryMenu';
import { useNavigate } from 'react-router';

const NewAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const toggleModal = () => {
    setMenuOpen(!menuOpen);
    const body = document.querySelector('body');
    body.classList.toggle('modalOpen');
  };
  return (
    <div className={css.container}>
      <header className={css.header}>
        <div onClick={() => navigate('/')} className={css.logoWrapper}>
          <img className={css.logoBaba} src={logoBaba} alt="logo" />
          <StyledSlimMom isLoggedIn={isLoggedIn} className={css.slimMom} src={slimMom} alt="logo" />
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
              onClick={toggleModal}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </>
        )}
      </header>
      <StyledUserMenuContainer isLoggedIn={isLoggedIn} />
      {menuOpen && (
        <StyledMobileMenu menuOpen={menuOpen}>
          <StyledNavLink onClick={toggleModal} className={css.diary} to="/diary">
            Diary
          </StyledNavLink>
          <StyledNavLink onClick={toggleModal} className={css.calc} to="/calculator">
            Calculator
          </StyledNavLink>
        </StyledMobileMenu>
      )}
    </div>
  );
};

export default NewAppBar;
