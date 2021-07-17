import React from "react";

function PostContainer({ data }) {
  const postedAt = Date().toLocaleString();

  return (
    <div className="post_container">
      <h2>Posted Comments</h2>
      {data.length > 0 ? (
        data.map((val) => {
          return (
            <div key={Math.random() * 100} className="container">
              {val.inputVal && (
                <p>
                  Text :<h3 style={{ width: "40%" }}>{val.inputVal}</h3>
                </p>
              )}

              {val.imgUrl && (
                <>
                  <h3>Gif</h3>
                  <img src={val.imgUrl} width="100" height="100" alt="ima" />
                </>
              )}
              <p>postedAt: {postedAt}</p>
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
