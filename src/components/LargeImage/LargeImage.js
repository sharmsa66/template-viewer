/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function LargeImage({ imageId, firstImage }) {
  if (!imageId) {
    imageId = firstImage?.id;
  }
  return (
    <div className="large-image">
      <a href="#" title="{imageId}">
        <img
          src={`images/large/${imageId}-b.jpg`}
          alt={`largeImage`}
          width="430"
          height="360"
        />
      </a>
    </div>
  );
}

export { LargeImage };
