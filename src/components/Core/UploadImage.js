import React, { useState, useEffect } from "react";

const UploadImage = props => {

  const [imageURI, setImageURI] = useState("");

  const readURI = (e) => {
    if(e.target.files && e.target.files[0]){
      let reader = new FileReader();
      reader.onload = (ev) => {
        setImageURI(ev.target.result);
        if (props.onChange !== undefined)
          props.onChange(ev.target.result); // propagate to parent component
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  
  const handleChange = (e) => {
    readURI(e);
    
  }

  // let imgTag = null;
  // if (imageURI !== null)
  //   imgTag = (<div className="row">
  //               <div className="small-9 small-centered columns">
  //                 <img className="thumbnail" src={imageURI}></img>
  //               </div>
  //             </div>);

  return (
    <>
          <div class="file is-info mx-1">
          <label class="file-label">
            <input class="file-input" type="file" name="resume"
              onChange={handleChange}/>
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Upload
              </span>
            </span>
            {/* <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span> */}
          </label>
        </div>
    </>
  );
};

export default UploadImage;