import React, { useState } from "react";

import Dropzone from "./DropZone";
import ImagePreview from "./ImagePreview";

import "./index.scss";

import { GetExtraction } from "../../actionTypes/extraction";
import { ApiState } from "../../interfaces/apiState";
import Extraction from "../../interfaces/extraction";

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

  const readFile = (f: File) => {
    setFile(f);
    const formData = new FormData();
    formData.append("file", f);
    getExtraction(formData);
  };

  const handleDelete = () => {
    clearExtractionState();
    URL.revokeObjectURL(file);
    setFile(undefined);
  };

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
      />;
    } else {
      content = <Dropzone setError={setError} onFileAdded={readFile} />;
    }
  }
  return <div className="uploader-container">{content}</div>;
};

export default Uploader;
