import React, { useState } from "react";
import Input from "../../components/elements/Input";
import Button from "../../components/Buttons/Buttons";

const AddPost = ({setTitle}) => {
  // 1️⃣ Temporary state for input field (live typing)
  const [tempTitle, setTempTitle] = useState("");

  const [postImg, setPostImg] = useState();

  const handleOnChange = (e) => {
    setTempTitle(e.target.value);
  };

  console.log("setTempTitle", tempTitle);

  const submitPost = () => {
    if (!tempTitle) {
      setTitle(tempTitle);
    } else setTitle(tempTitle);
  };

  return (
    <div className="post-wrapper d-flex flex-column gap-20 p-20">
      <h2>AllPost</h2>
      <div
        className="flex flex-col gap-8 items-start order-2 md:order-1 max-w-md w-full p-4 md:p-6 m-auto
              rounded-xl shadow-sm
              bg-white/95
              border border-gray-300"
      >
        <div className="flex flex-col gap-2 items-start">
          <label>Post Title</label>
          <Input type={"text"} onChange={handleOnChange} />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label>App Image</label>
          <input type="file"></input>
        </div>
        <Button onClick={submitPost} label={"Post"} />
      </div>
    </div>
  );
};

export default AddPost;
