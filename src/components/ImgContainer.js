import React from "react";

function ImgContainer({ val, setId }) {
  function handleClick() {
    setId(val.id);
  }
  return (
    <>
      <img
        key={val.images.downsized.url}
        src={val.images.downsized.url}
        width="100"
        height="100"
        alt="gif"
        onClick={handleClick}
      />
    </>
  );
}

export default ImgContainer;
