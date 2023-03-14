import React, { useState } from "react";
import { PDFDownloadLink, PDFViewer, pdf } from "@react-pdf/renderer";
import Quixote from "./Quixote";
import { saveAs } from "file-saver";

function Texts() {
  const [isPreviewOn, setIsPreviewOn] = useState(false);
  const [pagesCount, setPagesCount] = useState(4);

  const saveFile = () => {
    pdf(<Quixote />)
      .toBlob()
      .then((blob) => saveAs(blob, "Quixote.pdf"));
  };



  return (
    <div>
        <h1>Dom Quixote</h1>
        <h3>Pages: {pagesCount}</h3>
     
      <div>
        <button onClick={saveFile}>Save File</button>
        <button onClick={() => setIsPreviewOn(!isPreviewOn)}> Preview </button>
      </div>

      {isPreviewOn && (
        <PDFViewer
        showToolbar={false}
          style={{
            width: "50vw",
            height: "50vh",
            border: "none",
          }}
        >
          <Quixote/>
        </PDFViewer>
      )}
    </div>
  );
}

export default Texts;
