export const LoginStart = (userInfo) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const saveNewAccessToken = (token) => ({
  type: "SAVE_NEW_ACCESS_TOKEN",
  payload: token,
});

export const setLoadingActive = () => ({
  type: "LOADING_ACTIVE",
});

export const setLoadingUnActive = () => ({
  type: "LOADING_UNACTIVE",
});
