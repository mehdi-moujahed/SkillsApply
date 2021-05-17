import Register from "../../../pages/register";
import { ADD_TODO, TRY_AUTH } from "../actionType";

const axios = require("axios").default;

export const abc = (payload) => ({ type: ADD_TODO, payload });

export const setUserInfo = (payload) => ({ type: TRY_AUTH, payload });

export const signupAPI = (url, form) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/${url}`, form)
      .then(function (response) {
        console.log("reponse", response);
        console.log("form is", form);
        if (response.status === 200) {
          dispatch(setUserInfo(response.data));
        }
      })
      .catch(function (error) {
        // setOpen(true);
        // seterrorMsg(error.response.data.message);
        console.log("error", { error });
      });
  };
};
