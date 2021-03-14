import React from "react";
import "./todo-search.css";
import * as actions from "../actions";
import { connect } from "react-redux";
import { uniqueId } from "lodash";

const mapStateToProps = (state) => {
  const props = {
    text: state.text
  };
  return props;
};

const actionCreators = {
  newText: actions.newText,
  addTask: actions.addTask
};

function AddTask({ text, newText, addTask }) {
  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    newText({ text });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    const task = { text, status: "active", id: uniqueId() };
    addTask({ task });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3 todo-search">
        <input
          value={text}
          onChange={handleChange}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
        <div className="input-group-append">
          <button className="btn btn-primary " type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
export default connect(mapStateToProps, actionCreators)(AddTask);
