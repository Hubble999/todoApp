import React from "react";
import "./itemStatusFilter.css";
import cn from "classnames";
import * as actions from "../actions";
import { connect } from "react-redux";

const filters = ["all", "active", "done"];

const mapStateToProps = (state) => {
  const props = {
    currentFilter: state.tasks.currentFilter
  };
  return props;
};

const actionCreators = {
  setTaskFilter: actions.setTaskFilter
};

const ItemStatusFilter = ({ setTaskFilter, currentFilter }) => {
  const handleClickBtn = (filterName) => () => {
    if (currentFilter === filterName) {
      return;
    }
    setTaskFilter({ filterName });
  };
  const renderBtns = (currentFilter) => {
    return filters.map((filterName, index) => {
      const btnClass = cn("btn btn-secondary", {
        active: currentFilter === filterName,
        "btn-dark": currentFilter === filterName
      });
      return (
        <button
          key={index}
          onClick={handleClickBtn(filterName)}
          type="button"
          className={btnClass}
        >
          {filterName}
        </button>
      );
    });
  };
  return (
    <div
      className="btn-group item-status"
      role="group"
      aria-label="Basic example"
    >
      {renderBtns(currentFilter)}
    </div>
  );
};
export default connect(mapStateToProps, actionCreators)(ItemStatusFilter);
