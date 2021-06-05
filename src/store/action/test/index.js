import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  ADD_TEST_SUCCESS_MSG,
  ADD_TEST_ERROR_MSG,
  CLEAR_TESTS,
} from "../actionType";

const axios = require("axios").default;

export const addQuestion = (payload) => ({ type: ADD_QUESTION, payload });

export const deleteQuestion = (payload) => ({ type: DELETE_QUESTION, payload });

export const editQuestion = (payload, index) => ({
  type: EDIT_QUESTION,
  payload,
  index,
});

export const setAddingTestSuccesMsg = (payload) => ({
  type: ADD_TEST_SUCCESS_MSG,
  payload,
});

export const setAddingTestErrorMsg = (payload) => ({
  type: ADD_TEST_ERROR_MSG,
  payload,
});

export const clearTest = () => ({
  type: CLEAR_TESTS,
});

export const addTest = (url, form) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/manager/${url}`, {
        name: form.testName,
        description: form.testDescription,
        rate: 4.5,
        questions: form.questionAdded,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log("reponse", response);
          dispatch(setAddingTestSuccesMsg(response.data.message));
        }
      })
      .catch(function (error) {
        dispatch(setAddingTestErrorMsg(error.response.data.message));
      });
  };
};
