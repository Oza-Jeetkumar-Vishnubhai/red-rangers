import React, { useState } from "react";
import Webcam from "react-webcam";
import { Upload } from "upload-js";

const WebcamComponent = () => {
  const [url, setUrl] = useState("");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "046462f9demshe72468c53183484p19fe9ajsne5c3a90a47ef",
      "X-RapidAPI-Host": "license-plate-detection.p.rapidapi.com",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    // body: '{"url":"https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/giulianumberplate.jpg"}',
    // body: '{"url":"https://upcdn.io/W142hdT/raw/Screenshot%202023-02-17%20114515.jpg"}',
    body: `{"url":${url}}`
  };
  const fetchLisenceNo = async () => {
    console.log("url = ",url)
    fetch('https://license-plate-detection.p.rapidapi.com/license-plate-detection', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  };

  const uploadFile = async () => {
    const upload = Upload({
      apiKey: "public_W142hdT8eBHaAp1k7bVWCVaUvaru", // Replace "free" with your API key.
    });
    const d = await fetch(imgSrc);
    const blob = await d.blob();
    console.log(blob);
    const { fileUrl, filePath } = await upload.uploadFile(blob, {
      mime: ["image/jpeg"],
    });
    setUrl(fileUrl);
    console.log("file url = ", fileUrl);
  };

  const [imgSrc, setImgSrc] = useState("");
  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        style={{ display: imgSrc.length ? "none" : "block" }}
      >
        {({ getScreenshot }) => (
          <div>
            <button
              onClick={() => {
                setImgSrc(getScreenshot());
                // fetchLisenceNo();
                // uploadFile();
              }}
              style={{ display: imgSrc.length ? "none" : "block" }}
            >
              Capture photo
            </button>
            <button onClick={uploadFile}>get url</button>
            <button onClick={fetchLisenceNo}>fetch number</button>
          </div>
        )}
      </Webcam>
      <img src={imgSrc} alt="photo" />
    </div>
  );
};

export default WebcamComponent;
