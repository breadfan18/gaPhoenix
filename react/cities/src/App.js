// IMPORT useState
import React, { useState } from "react";
import "./index.css";
import imagesArr from "./imageData";

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage]
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  const handleImg = (url) => {
    setBigImage(url)
  }
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL

  const images = imagesArr.map((image, index) => {
    return <img
      className="thumb"
      key={index}
      src={image.img}
      alt={image.city}
      onClick={() => handleImg(image.img)}
    />
  })

  console.log(images);

  return (
    <div className="App" style={{
      backgroundImage: `url(${bigImage})`,
      backgroundSize: 'stretch',
    }}>
      <h1>Cities Of The World</h1>
      <div id="wrapper">

        <div id="thumbnails">{images}</div>

        <img id="bigimage"
          src={bigImage}
          alt="bigimage" />

      </div>
    </div>
  );
}
