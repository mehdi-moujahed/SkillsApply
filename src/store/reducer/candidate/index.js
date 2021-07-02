import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_ERROR_MSG,
  ADD_CANDIDATE_SUCCESS_MSG,
  DELETE_CANDIDATE,
  GET_CANDIDATE,
  INVITE_CANDIDATE,
  INVITE_CANDIDATE_ERROR_MSG,
  SET_CANDIDATE_PASSWORD,
  SET_CANDIDATE_PASSWORD_ERROR,
  UPDATE_CANDIDATE,
} from "../../action/actionType";

const initialState = {
  candidates: [],
  addCandidateSuccessMsg: "",
  addCandidateErrorMsg: "",
  pagination: [],
  deleteCandidateSuccesMsg: "",
  updateCandidateSuccesMsg: "",
  invitationMailSuccessMsg: "",
  invitationMailErrorMsg: "",
  candidateTest: [],
  candidatePassowrd: "",
  candidatePasswordError: "",
};

export const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CANDIDATE:
      return {
        ...state,
        candidates: action.payload.candidates,
        pagination: {
          ...state.pagination,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPage: action.payload.currentPage,
        },
      };
    case ADD_CANDIDATE_SUCCESS_MSG:
      return {
        ...state,
        addCandidateSuccessMsg: action.payload,
      };
    case ADD_CANDIDATE_ERROR_MSG:
      return {
        ...state,
        addCandidateErrorMsg: action.payload,
      };
    case DELETE_CANDIDATE:
      return {
        ...state,
        deleteCandidateSuccesMsg: action.payload,
      };
    case UPDATE_CANDIDATE:
      return {
        ...state,
        updateCandidateSuccesMsg: action.payload,
      };
    case INVITE_CANDIDATE:
      return {
        ...state,
        invitationMailSuccessMsg: action.payload,
      };
    case INVITE_CANDIDATE_ERROR_MSG:
      return {
        ...state,
        invitationMailErrorMsg: action.payload,
      };
    case GET_CANDIDATE:
      return {
        ...state,
        candidateTest: action.payload,
      };
    case SET_CANDIDATE_PASSWORD:
      return {
        ...state,
        candidatePassowrd: action.payload,
      };
    case SET_CANDIDATE_PASSWORD_ERROR:
      return {
        ...state,
        candidatePasswordError: action.payload,
      };
    default:
      return state;
  }
};
