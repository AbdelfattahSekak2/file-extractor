import React, { useState } from "react";

import Dropzone from "./DropZone";
import ImagePreview from "./ImagePreview";

import "./index.scss";

import Extraction from "../../interfaces/extraction";
import { ApiState } from "../../interfaces/apiState";
import { GetExtraction } from "../../actionTypes/extraction";

interface IProps {
  getExtraction: (file: FormData) => void;
  clearExtractionState: () => void;
  extraction: Extraction;
  apiPendingRequests: ApiState[];
  setError: (message: string) => void;
}

const Uploader: React.FunctionComponent<IProps> = ({
  getExtraction,
  clearExtractionState,
  extraction,
  apiPendingRequests,
  setError,
}) => {
  const [file, setFile] = useState();

  const readFile = (file: File) => {
    setFile(file);
    const formData = new FormData();
    formData.append("file", file);
    getExtraction(formData);
  }

  const handleDelete = () => {
    clearExtractionState();
    URL.revokeObjectURL(file);
    setFile(undefined);
  }
  
  const loading = apiPendingRequests.some((item: ApiState) => item.type === GetExtraction.REQUEST);
  let content: React.ReactElement | null = null;
  if (!loading) {
    if (file && extraction) {
      content = <ImagePreview
        setError={setError}
        file={file}
        handleDelete={handleDelete}
        extraction={extraction}
        supported={!file.type.includes("zip") && !file.type.includes("pdf")}
      />
    } else {
      content = <Dropzone setError={setError} onFileAdded={readFile} />;
    }
  }
  return <div className="uploader-container">{content}</div>;
};

export default Uploader;

