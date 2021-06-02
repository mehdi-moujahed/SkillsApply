import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
} from "../../action/actionType";

const initialState = {
  questions: [],
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
        questions: state.questions.filter((item, index) =>
          index !== action.index ? item : { ...action.payload }
        ),
      };
    default:
      return state;
  }
};
