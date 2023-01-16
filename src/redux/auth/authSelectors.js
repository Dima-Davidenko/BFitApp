export const selectIsLoggedIn = s => {
  return s.auth.isLoggedIn;
};
export const selectIsRefreshing = s => {
  return s.auth.isRefreshing;
};

export const selectSid = s => {
  return s.auth.sid;
};

export const selectUserName = s => {
  return s.auth.user.name;
};

export const selectUser = s => {
  return s.auth.user;
};
