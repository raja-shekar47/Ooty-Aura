import React from "react";

const DisplayPost = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center">
      <h2>{title}</h2>
      {/* Preview (optional) */}
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="w-40 h-40 object-cover rounded-md mt-2"
        />
      )}
    </div>
  );
};

export default DisplayPost;
