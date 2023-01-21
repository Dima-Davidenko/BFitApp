import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import DiaryMenu from 'components/DiaryMenu/DiaryMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import logoBaba from '../../assets/logo.svg';
import slimMom from '../../assets/slimMom.svg';
import css from './NewAppBar.module.scss';
import {
  StyledMobileMenu,
  StyledNavLink,
  StyledSlimMom,
  StyledUserMenuContainer,
} from './NewAppBar.styles';

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
