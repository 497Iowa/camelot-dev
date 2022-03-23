import React, { useState, useEffect} from "react";
import jimp from "jimp";

export default function ImagePreview(props) {
  const [img, setImg] = useState("");

  useEffect(() => {
    jimp.read("./wp.jpg").then(image => {

      //resize image using "contain" mode
      image.contain(100, 150);
      image.color([{ apply: 'red', params: [100] }]);
    
      //retrieve image
      image.getBase64Async(jimp.MIME_JPEG).then(newImage => {
        setImg(newImage);
      })
    })
  }, [props.code]);

  return (
    <>
      <img src={img}/>
    </>
  );
}


