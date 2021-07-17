import React from "react";
import ImgContainer from "./ImgContainer";

function Gif({ data, setId }) {
  console.log(data);

  return (
    <div className="gif_container" style={{ display: data && "block" }}>
      {data.length > 0
        ? data.map((val) => {
            return <ImgContainer key={val.id} val={val} setId={setId} />;
          })
        : !Array.isArray(data) && <ImgContainer val={data} setId={setId} />}
    </div>
  );
}

export default Gif;
