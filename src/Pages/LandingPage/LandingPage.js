import React, { useEffect, useState } from "react";
import  {FilmStrip} from "../../components/FilmStrip";
 import {LargeImage} from "../../components/LargeImage";
import {ImageInfo}  from "../..//components/ImageInfo/ImageInfo";

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState();
   const [dataList, setDataList] = useState([]);



  const apiUrl = "http://localhost:3001/api/v1/templates";

  const fetchData = async()  => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setDataList(data);
  }

  useEffect(() => {
    
    fetchData();
  },[]);
 
  return (
    <div className="container">
      <header>Code Development Project</header>
      <div className="wrapper">
        <div id="large">
          <div className="group">
            <LargeImage imageId={currentImage?.id} firstImage={dataList[0]} />
            <ImageInfo currentImage={currentImage} firstImage={dataList[0]} />
          </div>
        </div>
        <div className="thumbnail">
          <FilmStrip
            thumbnailList={dataList}
            onCurrentImageSelection={setCurrentImage}
          />
        </div>
      </div>
    </div>
  );
}

export {LandingPage};