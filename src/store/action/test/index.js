import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  ADD_TEST_SUCCESS_MSG,
  ADD_TEST_ERROR_MSG,
  CLEAR_TESTS,
  ADD_CREATED_TESTS,
  ADD_AVAILABLE_TESTS,
} from "../actionType";

const axios = require("axios").default;

export const addQuestion = (payload) => ({ type: ADD_QUESTION, payload });

export const deleteQuestion = (payload) => ({ type: DELETE_QUESTION, payload });

export const editQuestion = (payload, index) => ({
  type: EDIT_QUESTION,
  payload,
  index,
});

export const setCreatedTests = (payload) => ({
  type: ADD_CREATED_TESTS,
  payload,
});

export const setAvailablesTests = (payload) => ({
  type: ADD_AVAILABLE_TESTS,
  payload,
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

export const getCreatedTest = (
  url,
  page,
  pageSize,
  testName,
  timeFilter,
  testLevel,
  tomorrowDate,
  rate1,
  rate2
) => {
  return (dispatch) => {
    axios
      .get(
        `http://127.0.0.1:8080/manager/${url}/60a79878a0784e4240d4a619?page=${page}&size=${pageSize}&testName=${testName}&timeFilter=${timeFilter}&testLevel=${testLevel}&date2=${tomorrowDate}&rate1=${rate1}&rate2=${rate2}`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log("reponse", response);
          dispatch(setCreatedTests(response.data));
        }
      })
      .catch(function (error) {
        console.log("erreur", { error });
      });
  };
};

export const getAvailablleTest = (
  url,
  page,
  pageSize,
  testName,
  timeFilter,
  testLevel,
  tomorrowDate,
  rate1,
  rate2
) => {
  return (dispatch) => {
    axios
      .get(
        `http://127.0.0.1:8080/manager/${url}?page=${page}&size=${pageSize}&testName=${testName}&timeFilter=${timeFilter}&testLevel=${testLevel}&date2=${tomorrowDate}&rate1=${rate1}&rate2=${rate2}`
      )
      .then(function (response) {
        if (response.status === 200) {
          console.log("available tests", response);
          dispatch(setAvailablesTests(response.data));
        }
      })
      .catch(function (error) {
        console.log("erreur", { error });
      });
  };
};
