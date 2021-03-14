import React from "react";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";
import { connect } from "react-redux";
import * as actions from "../actions";

const mapStateToProps = (state) => {
  const { byId, currentFilter } = state.tasks;
  const props = {
    tasks:
      currentFilter === "all"
        ? Object.values(byId)
        : Object.values(byId).filter((task) => task.status === currentFilter)
  };
  return props;
};

const actionCreators = {
  removeTask: actions.removeTask,
  changeStatusTask: actions.changeStatusTask
};

function TodoListApp({ tasks, removeTask, changeStatusTask }) {
  const handleDeleteBtn = (id) => () => {
    removeTask({ id });
  };

  const handleDoneBtn = (id) => () => {
    changeStatusTask({ id });
  };
  return (
    <ul className="list-group todo-list">
      {tasks.map(({ text, id, status }) => (
        <li
          className=" shadow p-3 bg-white rounded list-group-item todo-item"
          key={id}
        >
          <div className="container">
            <div className="row">
              <div className="col-10">
                {status === "active" ? text : <s>{text}</s>}
              </div>
              <div className="col">
                <DoneButton statusBtn={handleDoneBtn(id)} />
                <DeleteButton removeClick={handleDeleteBtn(id)} />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default connect(mapStateToProps, actionCreators)(TodoListApp);
