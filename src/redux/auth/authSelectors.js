export const selectIsLoggedIn = s => {
  return s.auth.isLoggedIn;
};
export const selectIsRefreshing = s => {
  return s.auth.isRefreshing;
};

export const selectSid = s => {
  return s.auth.sid;
};
export const selectUser = s => {
  return s.auth.user;
};
export const selectUserId = s => s.auth.user.id;
export const selectAccessToken = s => s.auth.accessToken;
