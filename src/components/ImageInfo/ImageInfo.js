import React from "react";

import "./style.css";

  function ImageInfo({ currentImage, firstImage }) {
  if (!currentImage) {
    currentImage = firstImage;
  }
  return (
    <div className="details">
      <p>
        <strong>Title</strong>
        <span>{currentImage?.title}</span>
      </p>
      <p>
        <strong>Description</strong>
        <span>{currentImage?.description}</span>
      </p>
      <p>
        <strong>Cost</strong>
        <span>${currentImage?.cost}</span>
      </p>
      <p>
        <strong>ID #</strong>
        <span>{currentImage?.id} </span>
      </p>
      <p>
        <strong>Thumbnail File</strong>
        <span> {currentImage?.thumbnail}</span>
      </p>
      <p>
        <strong>Large Image File</strong>
        <span> {currentImage?.image}</span>
      </p>
    </div>
  );
}

export { ImageInfo};