import React from "react";
import Input from "../components/elements/Input";
import "./Page.css";

const AllPost = () => {
  return (
    <div className="post-wrapper">
      <div>AllPost</div>
      <div className="flex flex-col gap-3  items-center justify-center ">
        <div>
          <label>Post Title</label>
          <Input type={"text"} />
        </div>
        <div>
          <label>App Image</label>
          <input type="file"></input>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
