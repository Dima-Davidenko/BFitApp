import css from './AuthMenu.module.scss';
import { StyledNavlink } from './AuthMenu.styles';

const AuthMenu = () => {
  return (
    <div className={css.wrapper}>
      <StyledNavlink className={css.navlink} to="/login">
        Log In
      </StyledNavlink>
      <StyledNavlink className={css.navlink} to="/registration">
        Registration
      </StyledNavlink>
    </div>
  );
};

export default AuthMenu;
