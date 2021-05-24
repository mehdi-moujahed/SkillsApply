import Register from "../../../pages/register";
import {
  ADD_TODO,
  TRY_AUTH,
  TRY_AUTH_ERROR,
  TRY_AUTH_SUCCESS,
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
        // setOpen(true);
        // seterrorMsg(error.response.data.message);
        dispatch(setErrorMsgAPI(error.response.data.message));
        console.log("error", { error });
      });
  };
};
