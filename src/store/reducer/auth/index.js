import {
  ADD_TODO,
  TRY_AUTH,
  TRY_AUTH_ERROR,
  TRY_AUTH_SUCCESS,
} from "../../action/actionType";

const initialState = {
  registerForm: {},
  user: null,
  error: "",
  success: "",
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        registerForm: { ...state.registerForm, ...action.payload },
      };

    case TRY_AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case TRY_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TRY_AUTH_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    default:
      return state;
  }
};
