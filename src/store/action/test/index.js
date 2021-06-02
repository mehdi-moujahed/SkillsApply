import { ADD_QUESTION, DELETE_QUESTION, EDIT_QUESTION } from "../actionType";

export const addQuestion = (payload) => ({ type: ADD_QUESTION, payload });

export const deleteQuestion = (payload) => ({ type: DELETE_QUESTION, payload });

export const editQuestion = (payload, index) => ({
  type: EDIT_QUESTION,
  payload,
  index,
});
