import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  ADD_TEST,
  ADD_TEST_SUCCESS_MSG,
  ADD_TEST_ERROR_MSG,
  CLEAR_TESTS,
  ADD_CREATED_TESTS,
  ADD_AVAILABLE_TESTS,
  SET_NEW_AVAILABLE_TEST,
  SET_BEST_AVAILABLE_TEST,
  SET_POPULAR_AVAILABLE_TEST,
  SET_TEST_EXAM,
  SET_QUESTIONS_EXAM,
  SET_RESULT,
  UPDATE_RESULT,
  DELETE_RESULT,
  DELETE_TEST,
  DELETE_TEST_ERROR,
  ADD_ANSWER_TEXT,
} from "../../action/actionType";

const initialState = {
  questions: [],
  tests: [],
  addTestSuccesMsg: "",
  addTestErrorMsg: "",
  testsCreated: [],
  pagination: [],
  availableTests: [],
  availableTestsPagination: [],
  newAvailableTests: [],
  bestAvailableTests: [],
  popularAvailableTests: [],
  paginationAllAvailableTests: [],
  testToPass: [],
  examQuestions: [],
  result: [],
  deleteTestSuccessMsg: "",
  deleteTestErrorMsg: "",
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
          allTestsCreated: action.payload.allTestsCreated,
        },
      };
    case ADD_AVAILABLE_TESTS:
      return {
        ...state,
        availableTests: action.payload.availableTests,
        availableTestsPagination: {
          ...state.availableTestsPagination,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPage: action.payload.currentPage,
        },
      };
    case SET_NEW_AVAILABLE_TEST:
      return {
        ...state,
        newAvailableTests: action.payload.availableTests,
        paginationAllAvailableTests: {
          ...state.paginationAllAvailableTests,
          totalPages: action.payload.totalPages,
          totalItems: action.payload.totalItems,
          currentPage: action.payload.currentPage,
        },
      };
    case SET_BEST_AVAILABLE_TEST:
      return {
        ...state,
        bestAvailableTests: action.payload.availableTests,
      };
    case SET_POPULAR_AVAILABLE_TEST:
      return {
        ...state,
        popularAvailableTests: action.payload.availableTests,
      };
    case SET_TEST_EXAM:
      return {
        ...state,
        testToPass: action.payload,
      };
    case SET_QUESTIONS_EXAM:
      return {
        ...state,
        examQuestions: [...state.examQuestions, ...action.payload],
      };
    case SET_RESULT:
      return {
        ...state,
        result: [...state.result, action.payload],
      };
    case UPDATE_RESULT:
      return {
        ...state,
        result: state.result.map((item, index) =>
          index === action.index
            ? { ...item, answersId: [...item.answersId, action.payload] }
            : item
        ),
      };
    case DELETE_RESULT:
      return {
        ...state,
        result: state.result.map((item, index) =>
          index === action.index
            ? {
                ...item,
                answersId: item.answersId.filter(
                  (obj) => obj !== action.payload && obj
                ),
              }
            : item
        ),
      };
    case DELETE_TEST:
      return {
        ...state,
        deleteTestSuccessMsg: action.payload,
      };
    case DELETE_TEST_ERROR:
      return {
        ...state,
        deleteTestErrorMsg: action.payload,
      };
    case ADD_ANSWER_TEXT:
      return {
        ...state,
        result: state.result.map((item, index) =>
          index === action.index ? { ...item, answer: action.payload } : item
        ),
      };
    default:
      return state;
  }
};
