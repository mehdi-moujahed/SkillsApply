import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_SUCCESS_MSG,
  ADD_CANDIDATE_ERROR_MSG,
  DELETE_CANDIDATE,
  UPDATE_CANDIDATE,
  INVITE_CANDIDATE,
  INVITE_CANDIDATE_ERROR_MSG,
} from "../actionType";

const axios = require("axios").default;

export const setAddingCandidateSuccesMsg = (payload) => ({
  type: ADD_CANDIDATE_SUCCESS_MSG,
  payload,
});
export const setAddingCandidateErrorMsg = (payload) => ({
  type: ADD_CANDIDATE_ERROR_MSG,
  payload,
});
export const setCandidates = (payload) => ({
  type: ADD_CANDIDATE,
  payload,
});
export const setDeleteMSg = (payload) => ({
  type: DELETE_CANDIDATE,
  payload,
});
export const setUpdateMsg = (payload) => ({
  type: UPDATE_CANDIDATE,
  payload,
});

export const setInvitationMailSuccessMsg = (payload) => ({
  type: INVITE_CANDIDATE,
  payload,
});
export const setInvitationMailErrorMsg = (payload) => ({
  type: INVITE_CANDIDATE_ERROR_MSG,
  payload,
});

export const candidateRegister = (url, form) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/users/${url}`, form)
      .then(function (response) {
        if (response.status === 200) {
          dispatch(setAddingCandidateSuccesMsg(response.data.message));
        }
      })
      .catch(function (error) {
        dispatch(setAddingCandidateErrorMsg(error.response.data.message));
      });
  };
};

export const getAllCandidates = (url, id, page, size, email, diploma, date) => {
  return (dispatch) => {
    axios
      .get(
        `http://127.0.0.1:8080/users/${url}/${id}?page=${page}&size=${size}&email=${email}&diploma=${diploma}&date2=${date}`
      )
      .then(function (response) {
        if (response.status === 200) {
          dispatch(setCandidates(response.data));
        }
      })
      .catch(function (error) {
        console.log("erreur listing candidats", { error });
      });
  };
};

export const deleteCandidate = (url, id) => {
  return (dispatch) => {
    axios
      .delete(`http://127.0.0.1:8080/users/${url}/${id}`)
      .then(function (response) {
        if (response.status === 200) {
          dispatch(setDeleteMSg(response.data.message));
        }
      })
      .catch(function (error) {
        console.log("erreur lors du supression de candidat", { error });
      });
  };
};

export const updateCandidateAPI = (url, id, form) => {
  return (dispatch) => {
    axios
      .patch(`http://127.0.0.1:8080/users/${url}/${id}`, form)
      .then(function (response) {
        if (response.status === 200) {
          dispatch(setUpdateMsg(response.data.message));
        }
      })
      .catch(function (error) {
        console.log("erreur lors du modification de candidat", { error });
      });
  };
};

export const inviteCandidate = (url, email, testID) => {
  return (dispatch) => {
    axios
      .post(`http://127.0.0.1:8080/manager/${url}/${email}?testID=${testID}`)
      .then(function (response) {
        if (response.status === 200) {
          dispatch(setInvitationMailSuccessMsg(response.data.message));
        }
      })
      .catch(function (error) {
        dispatch(setInvitationMailErrorMsg(error.response.data.message));
      });
  };
};
