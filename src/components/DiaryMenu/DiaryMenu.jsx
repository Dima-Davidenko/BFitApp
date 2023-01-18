import css from './DiaryMenu.module.scss';
import { StyledNavLink } from './DiaryMenu.styles';

const DiaryMenu = () => {
  return (
    <div className={css.wrapper}>
      {' '}
      <StyledNavLink className={css.diary} to="/diary">
        Diary
      </StyledNavLink>
      <StyledNavLink className={css.calc} to="/calculator">
        Calculator
      </StyledNavLink>
    </div>
  );
};

export default DiaryMenu;
