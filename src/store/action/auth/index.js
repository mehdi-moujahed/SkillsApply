import {
  ADD_TODO,
  TRY_AUTH,
  TRY_AUTH_ERROR,
  TRY_AUTH_SUCCESS,
  RESET_PASSWORD,
} from "../actionType";

const axios = require("axios").default;

export const abc = (payload) => ({ type: ADD_TODO, payload });

//déclaration de l'action
export const setUserInfo = (payload) => ({ type: TRY_AUTH, payload });

export const setErrorMsgAPI = (payload) => ({ type: TRY_AUTH_ERROR, payload });

export const setSuccessMsgAPI = (payload) => ({
  type: TRY_AUTH_SUCCESS,
  payload,
});

export const setResetPasswordSuccessMsg = (payload) => ({
  type: RESET_PASSWORD,
  payload,
});

export const resetPasswordAPI = (url, form) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/manager/${url}`, {
        newPassword: form.password,
        confirmNewPassword: form.newPassword,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log("reponse", response);
          dispatch(setResetPasswordSuccessMsg(response.data.message));
        }
      })
      .catch(function (error) {
        console.log("error", { error });
      });
  };
};

export const signupAPI = (url, form) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/${url}`, form)
      .then(function (response) {
        console.log("reponse", response);
        console.log("form is", form);
        if (response.status === 200) {
          dispatch(setUserInfo(response.data)); //pour envoyer le réponse de l'api au reducer
          dispatch(setSuccessMsgAPI(response.data.message));
        }
      })
      .catch(function (error) {
        dispatch(setErrorMsgAPI(error.response.data.message));
        console.log("error", { error });
      });
  };
};

export const signinAPI = (url, form) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/${url}`, {
        params: {
          username: form.email,
          password: form.password,
          grant_type: "password",
        },
        auth: {
          password: "secret",
          username: "rokin-client",
        },
      })
      .then(function (response) {
        console.log("form is", form);
        console.log("reponse", { response });

        // dispatch(setUserInfo(response.data)); //pour envoyer le réponse de l'api au reducer
        // dispatch(setSuccessMsgAPI(response.data.message));
      })
      .catch(function (error) {
        // dispatch(setErrorMsgAPI(error.response.data.message));
        console.log("error", { error });
      });
  };
};
