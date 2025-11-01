import React, {  useState } from "react";
import AddPost from "./AddPost";
import DisplayPost from "./DisplayPost";

const Posts = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  
  console.log("image 1", image)
  return (
    <div>
      <AddPost setTitle={setTitle} setImage={setImage} />
      <DisplayPost title={title} image={image} />
    </div>
  );
};

export default Posts;
