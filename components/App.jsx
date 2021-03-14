import React from "react";
import AddTask from "./AddTask";
import HeaderApp from "./HeaderApp";
import TodoListApp from "./TodoListApp";
import ItemStatusFilter from "./ItemStatusFilter";
import { connect } from "react-redux";

import "./app.css";

const mapStateToProps = (state) => state;

function App() {
  return (
    <div className="shadow p-3 mb-5 bg-white rounded app ">
      <HeaderApp />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ItemStatusFilter />
        <AddTask />
      </div>
      <TodoListApp />
    </div>
  );
}
export default connect(mapStateToProps)(App);
