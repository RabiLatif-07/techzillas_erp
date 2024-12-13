import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';

export const loginUser = (user, history) => async (dispatch) => {
  try {
    let response;
    if (user.email === "admin@themesbrand.com" && user.password === "123456") {
      const adminUserData = {
        email: "admin@themesbrand.com",
        name: "Admin",
        role: "admin",
      };
      sessionStorage.setItem("authUser", JSON.stringify(adminUserData));
      dispatch(loginSuccess(adminUserData));
      history('/dashboard');
      return;
    }

    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = postJwtLogin({ email: user.email, password: user.password });
    }

    const data = await response;
    console.log(data, 'response');

    if (data) {
      sessionStorage.setItem("authUser", JSON.stringify(data));
      dispatch(loginSuccess(data));
      history('/dashboard');
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    sessionStorage.removeItem("authUser");
    dispatch(logoutUserSuccess(true));
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};
