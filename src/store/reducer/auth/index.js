import { ADD_TODO, TRY_AUTH } from "../../action/actionType";
const initialState = {
  registerForm: {},
  user: null,
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

    default:
      return state;
  }
};
