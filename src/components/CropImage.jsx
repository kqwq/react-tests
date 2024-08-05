import React, { useState } from "react";

import SvelteCropper from "svelte-easy-crop";
import toReact from "svelte-adapter/react";

const Cropper = toReact(SvelteCropper, {}, "div");
let image = "https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg";

const buttons = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: "10px",
};

const CropImage = () => {
  const [showCropper, toggleShow] = useState(false);
  const [data, setData] = useState({});
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((z) => (z >= 3 ? 3 : Math.floor(z) + 1));
  const zoomOut = () => setZoom((z) => (z <= 1 ? 1 : Math.ceil(z) - 1));
  const updateData = ({ detail }) => setData(detail);

  return (
    <div className="App">
      <button onClick={() => toggleShow((bool) => !bool)}>Show Cropper</button>
      <div className="data">
        Data: <pre>{JSON.stringify(data, null, 2)}</pre>
        Zoom Level: <pre>{JSON.stringify(zoom, null, 2)}</pre>
      </div>
      {showCropper ? (
        <>
          <Cropper onCropcomplete={updateData} watchZoom={(z) => setZoom(z)} image={image} zoom={zoom} />
          <div style={buttons}>
            <button onClick={() => toggleShow((bool) => !bool)}>Close Cropper</button>
            <button onClick={zoomIn}>+</button>
            <button onClick={zoomOut}>-</button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CropImage;
