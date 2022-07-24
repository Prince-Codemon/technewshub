import React from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        {" "}
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
      {hits.map((cr) => {
          const {title , author, objectID ,url ,num_comments } = cr
        return (
            <div className="card" key={objectID}>
            <h2> {title}</h2>
            <p>By <span>{author}</span></p> | <span>{num_comments} comments</span>{" "}
            <div className="card-button">
                <a href={url} target="_blank" rel="noreferrer" > Read More</a>
                <a href="#" onClick={()=>removePost(objectID)}>Remove</a>
            </div>
            </div>
        );
      })}
      </div>
    </>
  );
};

export default Stories;
