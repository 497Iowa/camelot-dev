import React, { useState, useEffect } from "react";
import BuiltInImageDropdown from "./BuiltInImageDropdown";
import UploadImage from "./UploadImage";

const ImageHarness = props => {

  const [img, setImg] = useState("")

  useEffect(() => {
    switchImage("../wp.jpg");
  }, []);

  const switchImage = (url) => {
    setImg(url);
    document.querySelector('#test-canvas').removeAttribute('data-caman-id');
    eval(`loadImage("${url}")`);
  }
  
  const resetImage = () => {
    switchImage(img);
  }

  return (
    <>
        <canvas className="mx-auto is-block" id="test-canvas"></canvas>
        <div className="m-2 is-flex is-justify-content-center">
          <BuiltInImageDropdown onChange={(e) => switchImage(e)}></BuiltInImageDropdown>
          <UploadImage onChange={(e) =>switchImage(e)}></UploadImage>
        </div>
        <button className="mx-auto reset-btn button" onClick={resetImage}>
          <span>Reset</span>
            <span class="icon is-small">
            <i class="fas fa-eraser"></i>
          </span>
        </button>
        
        
    </>
  );
};

export default ImageHarness;