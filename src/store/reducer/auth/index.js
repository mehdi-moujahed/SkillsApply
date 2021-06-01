import {
  ADD_TODO,
  TRY_AUTH,
  TRY_AUTH_ERROR,
  TRY_AUTH_SUCCESS,
  AUTH,
  RESET_PASSWORD,
} from "../../action/actionType";

const initialState = {
  registerForm: {},
  loginForm: {},
  user: null,
  error: "",
  success: "",
  resetPassword: "",
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        registerForm: { ...state.registerForm, ...action.payload },
      };

    case AUTH:
      return {
        ...state,
        loginForm: { ...state.loginForm, ...action.payload },
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
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };

    default:
      return state;
  }
};
