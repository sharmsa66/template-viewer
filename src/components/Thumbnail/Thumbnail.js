/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
 
function Thumbnail({ currentImage, setCurrentImage }) {
  return (
    <div>
      <a href="#" title="{imageId}">
        <img
          src={`images/thumbnails/${currentImage?.id}-m.jpg`}
          alt="thumbnail"
          width="145"
          height="121"
          onClick={() => setCurrentImage(currentImage)}
        />
        <span>{currentImage.id}</span>
      </a>
    </div>
  );
}

 
export { Thumbnail};