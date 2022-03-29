import React, { useState, useEffect } from "react";
import BuiltInImageDropdown from "./BuiltInImageDropdown";
import UploadImage from "./UploadImage";

const ImageHarness = props => {

  const switchImage = (url) => {
    document.querySelector('#test-canvas').removeAttribute('data-caman-id');
    eval(`loadImage("${url}")`);
  }

  return (
    <>
        <canvas id="test-canvas"></canvas>
        <div className="m-2 is-flex is-justify-content-center">
          <BuiltInImageDropdown onChange={(e) => switchImage(e)}></BuiltInImageDropdown>
          <UploadImage onChange={(e) =>switchImage(e)}></UploadImage>
        </div>
        
        
    </>
  );
};

export default ImageHarness;