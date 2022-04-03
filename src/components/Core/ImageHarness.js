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
        <div className="canvas-cntr">
          <canvas className="mx-auto is-block" id="test-canvas"></canvas>
          <div className={`canvas-overlay is-flex is-justify-content-center is-align-items-center ${!props.loading ? "overlay-hidden" : ""}`}>
            <span className="loading-icon icon is-large">
              <i className="fas fa-cog fa-spin"></i>
            </span>
          </div>
        </div>
        
        <div className="m-2 is-flex is-justify-content-center">
          <BuiltInImageDropdown onChange={(e) => switchImage(e)}></BuiltInImageDropdown>
          <UploadImage onChange={(e) =>switchImage(e)}></UploadImage>
        </div>
        <button className="mx-auto reset-btn button" onClick={resetImage}>
          <span>Reset</span>
            <span className="icon is-small">
            <i className="fas fa-eraser"></i>
          </span>
        </button>
        
        
    </>
  );
};

export default ImageHarness;