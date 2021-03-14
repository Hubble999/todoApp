import React from "react";
import "./deleteButton.css";

const DeleteButtonApp = ({ removeClick }) => {
  return (
    <svg
      onClick={removeClick}
      width="1.2em"
      height="1.2em"
      viewBox="0 0 16 16"
      class="bi bi-archive-fill delete"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"
      />
    </svg>
  );
};

export default DeleteButtonApp;
