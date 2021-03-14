import { createAction } from "redux-actions";

export const addTask = createAction("TASK_ADD");
export const newText = createAction("NEW_TEXT");
export const removeTask = createAction("TASK_REMOVE");
export const changeStatusTask = createAction("TASK_STATUS_CHANGE");
export const setTaskFilter = createAction("TASK_FILTER_SET");
