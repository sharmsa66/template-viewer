import React, { useEffect, useState } from "react";
import { Thumbnail } from "../Thumbnail";
import "./style.css";
import { paginate } from "../../utils/utils";

function FilmStrip({ thumbnailList, onCurrentImageSelection }) {
  const [stripList, setStripList] = useState([]);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [pageNum, setPageNum] = useState(1);
  const pageSize = 4;
  const totalPages = Math.ceil(thumbnailList.length / pageSize);

  const enableButtons = () => {
    setIsNextDisabled(false);
    setIsPrevDisabled(false);
  };

  useEffect(() => {
    const getCurrentImage = (currentImage) => {
      onCurrentImageSelection(currentImage);
    };

    const list = paginate(thumbnailList, pageSize, pageNum);
    let newList = list.map((currentImage) => {
      return (
        <Thumbnail
          key={currentImage.id}
          currentImage={currentImage}
          setCurrentImage={getCurrentImage}
        />
      );
    });

    setStripList(newList);
  }, [pageNum, thumbnailList, onCurrentImageSelection]);

  const onNextClick = () => {
    if (pageNum < totalPages) {
      setPageNum((prevVal) => prevVal + 1);
      enableButtons();
    } else {
      setIsNextDisabled(true);
    }
  };

  const onPrevClick = () => {
    if (pageNum > 1) {
      setPageNum((prevVal) => prevVal - 1);
      enableButtons();
    } else {
      setIsPrevDisabled(true);
    }
  };

  return (
    <div className="film-strip">
      <div
        className={isNextDisabled ? "next disabled" : "next"}
        onClick={() => onNextClick()}
      ></div>
      {stripList}
      <div
        className={isPrevDisabled ? "previous disabled" : "previous"}
        onClick={() => onPrevClick()}
      ></div>
    </div>
  );
}

export { FilmStrip };
