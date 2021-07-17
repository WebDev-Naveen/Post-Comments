import React from "react";

function Button({ style, name, gifBtn, handleSubmit }) {
  return (
    <div className="btn_container" style={style} onClick={handleSubmit}>
      <button style={gifBtn}>{name ? name : "Post Comment"}</button>
    </div>
  );
}

export default Button;
