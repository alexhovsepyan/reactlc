import React from "react";

export default function StandardButton({ title = "click", action }) {
  return (
    <button onClick={action} className="standardButton">
      {title}
    </button>
  );
}
