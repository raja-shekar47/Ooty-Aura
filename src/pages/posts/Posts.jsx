import React, { useState } from "react";
import AddPost from "./AddPost";
import DisplayPost from "./DisplayPost";

const Posts = () => {
  const [title, setTitle] = useState();
  return (
    <div>
      <AddPost setTitle={setTitle} title={title} />
      <DisplayPost title={title} />
    </div>
  );
};

export default Posts;
