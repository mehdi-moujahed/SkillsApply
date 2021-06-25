import {
  ADD_CANDIDATE,
  ADD_CANDIDATE_ERROR_MSG,
  ADD_CANDIDATE_SUCCESS_MSG,
  DELETE_CANDIDATE,
  INVITE_CANDIDATE,
  INVITE_CANDIDATE_ERROR_MSG,
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
    default:
      return state;
  }
};
