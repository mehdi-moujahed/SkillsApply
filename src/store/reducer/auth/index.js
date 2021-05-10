import { ADD_TODO } from "../../action/actionType";
const initialState = {
  registerForm: {},
};
export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        registerForm: { ...state.registerForm, ...action.payload },
      };

    default:
      return state;
  }
};
