import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  ADD_TEST,
  ADD_TEST_SUCCESS_MSG,
  ADD_TEST_ERROR_MSG,
  CLEAR_TESTS,
  ADD_CREATED_TESTS,
} from "../../action/actionType";

const initialState = {
  questions: [],
  tests: [],
  addTestSuccesMsg: "",
  addTestErrorMsg: "",
  testsCreated: [],
  pagination: [],
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.questions.filter(
          (item, index) => index !== action.payload && item
        ),
      };
    case EDIT_QUESTION:
      return {
        ...state,
        questions: state.questions.map((item, index) =>
          index === action.index ? action.payload : item
        ),
      };
    case ADD_TEST:
      return {
        ...state,
        tests: [...state.tests, action.payload],
      };
    case ADD_TEST_SUCCESS_MSG:
      return {
        ...state,
        addTestSuccesMsg: action.payload,
      };
    case ADD_TEST_ERROR_MSG:
      return {
        ...state,
        addTestErrorMsg: action.payload,
      };
    case CLEAR_TESTS:
      return {
        ...state,
        questions: [],
      };
    case ADD_CREATED_TESTS:
      return {
        ...state,
        testsCreated: action.payload.testsCreated,
        pagination: {
          ...state.pagination,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPage: action.payload.currentPage,
        },
      };
    default:
      return state;
  }
};
