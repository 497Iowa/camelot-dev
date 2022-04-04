import React, { useState, useEffect } from "react";
import BuiltInImageDropdown from "./BuiltInImageDropdown";
import UploadImage from "./UploadImage";

const ImageHarness = props => {

  const [img, setImg] = useState("")
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    switchImage("../wp.jpg", true);
  }, []);

  const switchImage = (url, disableSwitching = false) => {
    if (!disableSwitching) setSwitching(true);
    window.renderFinished = [() => {console.log("asdf")}, () => setSwitching(false)];
    setImg(url);
    document.querySelector('#test-canvas').removeAttribute('data-caman-id');
    window.loadImage(url);
  }
  
  const resetImage = () => {
    switchImage(img);
  }

  const downloadCanvas = () => {
    var link = document.createElement('a');
    link.download = 'output.png';
    link.href = document.getElementById('test-canvas').toDataURL()
    link.click();
  }
  
  const runButton = props.showRunButton ? <button className={`mx-1 run-btn button is-success ${props.loading ? "is-loading" : ""}`} onClick={props.onRunClick}>
    <span>Run Filter</span>
      <span className="icon is-small">
      <i className="fas fa-play"></i>
    </span>
  </button> : <></>

  return (
    <>
        <div className="canvas-cntr">
          <canvas className="mx-auto is-block" id="test-canvas"></canvas>
          <div className={`canvas-overlay is-flex is-justify-content-center is-align-items-center ${!props.loading && !switching ? "overlay-hidden" : ""}`}>
            <span className="loading-icon icon is-large">
              <i className="fas fa-cog fa-spin"></i>
            </span>
          </div>
        </div>
        
        <div className="m-2 is-flex is-justify-content-center">
          <BuiltInImageDropdown onChange={(e) => switchImage(e)}></BuiltInImageDropdown>
          <UploadImage onChange={(e) =>switchImage(e)}></UploadImage>
        </div>
        <div className="m-2 is-flex is-justify-content-center">
        {runButton}
        <button className="mx-1 reset-btn button" onClick={resetImage}>
          <span>Reset</span>
            <span className="icon is-small">
            <i className="fas fa-eraser"></i>
          </span>
        </button>
        <button class="button" onClick={downloadCanvas}>
          <span class="icon is-small">
            <i class="fas fa-download"></i>
          </span>
        </button>
        </div>
       
        
        
    </>
  );
};

export default ImageHarness;