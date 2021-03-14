import React from "react";
import "./todoListItem.css";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";
import * as actions from "../actions";
import { connect } from "react-redux";

const actionCreators = {
  removeTask: actions.removeTask
};

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks
  };
  return props;
};

function TodoListItem({ text, id }) {
  return (
    <li className="list-group-item todo-item" key={id}>
      <div className="container">
        <div className="row">
          <div className="col-10">{text}</div>
          <div className="col">
            <DoneButton />
            <DeleteButton id={id} />
          </div>
        </div>
      </div>
    </li>
  );
}
export default connect(mapStateToProps)(TodoListItem);
