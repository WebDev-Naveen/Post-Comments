import React, { useEffect, useState } from "react";

function PostContainer({ data }) {
  console.log(data);
  return (
    <div className="post_container">
      <h2>Posted Comments</h2>
      {data.length > 0 ? (
        data.map((val) => {
          return (
            <div key={Math.random() * 100}>
              {val.inputVal && <p>Text :{val.inputVal}</p>}

              {val.imgUrl && (
                <>
                  <span>Gif</span>
                  <img src={val.imgUrl} width="100" height="100" alt="ima" />
                </>
              )}
            </div>
          );
        })
      ) : (
        <h3>There is no Posted Comments yet</h3>
      )}
    </div>
  );
}

export default PostContainer;
