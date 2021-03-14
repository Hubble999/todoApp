import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import * as actions from "./actions";
import _ from "lodash";

const text = handleActions(
  {
    [actions.newText](state, { payload: { text } }) {
      return text;
    },
    [actions.addTask](state) {
      return "";
    }
  },
  ""
);

const tasks = handleActions(
  {
    [actions.addTask](state, { payload: { task } }) {
      return {
        ...state,
        byId: { ...state.byId, [task.id]: task },
        allIds: [task.id, ...state.allIds]
      };
    },
    [actions.removeTask](state, { payload: { id } }) {
      return {
        ...state,
        byId: _.omit(state.byId, id),
        allIds: _.without(state.allIds, id)
      };
    },
    [actions.changeStatusTask](state, { payload: { id } }) {
      const task = state.byId[id];
      const status = task.status === "active" ? "done" : "active";
      const updatedTask = { ...task, status };
      return { ...state, byId: { ...state.byId, [task.id]: updatedTask } };
    },
    [actions.setTaskFilter](state, { payload: { filterName } }) {
      return { ...state, currentFilter: filterName };
    }
  },
  { byId: {}, allIds: [], currentFilter: "all" }
);

export default combineReducers({ tasks, text });
