import { ADD_QUESTION, DELETE_QUESTION, UPDATE_QUESTION } from "../actionType";

export const addQuestion = (payload) => ({ type: ADD_QUESTION, payload });

export const deleteQuestion = (payload) => ({ type: DELETE_QUESTION, payload });

export const editQuestion = (payload) => ({ type: UPDATE_QUESTION, payload });
