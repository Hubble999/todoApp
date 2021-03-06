import React from "react";
import "./doneButton.css";

const DoneButton = ({ statusBtn }) => {
  return (
    <svg
      onClick={statusBtn}
      width="1.12em"
      height="1.12em"
      viewBox="0 0 16 16"
      class="bi bi-check-square-fill done"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
      />
    </svg>
  );
};

export default DoneButton;
