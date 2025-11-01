import React, { useState } from "react";
import Input from "../../components/elements/Input";
import Button from "../../components/Buttons/Buttons";

const AddPost = ({ setTitle, setImage }) => {
  // 1️⃣ Temporary state for input field (live typing)
  const [tempTitle, setTempTitle] = useState("");
  const [tempImage, setTempImage] = useState(" ");

  const handleOnChange = (e) => {
    setTempTitle(e.target.value);
  };

  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempImage(file);
    }
  };

  const submitPost = () => {
    if (!tempTitle) {
      setTitle(tempTitle);
    } else setTitle(tempTitle);

    setImage(tempImage);
  };

  console.log("image", tempImage);

  return (
    <div className="post-wrapper d-flex flex-column gap-20 p-20">
      <h1 className="text-2xl font-semibold text-gray-800 tracking-tight mb-2">
        Add Post
      </h1>
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
          <input type="file" onChange={handleOnChangeImage}></input>
        </div>
        <Button onClick={submitPost} label={"Post"} />
      </div>
    </div>
  );
};

export default AddPost;
