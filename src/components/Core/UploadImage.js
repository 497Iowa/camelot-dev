import React, { useState } from "react";

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
          <div className="file is-info mx-1">
          <label className="file-label">
            <input className="file-input" type="file" name="resume"
              onChange={handleChange}/>
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">
                Upload
              </span>
            </span>
            {/* <span className="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span> */}
          </label>
        </div>
    </>
  );
};

export default UploadImage;