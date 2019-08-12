
import React from "react";

import "./index.scss";

interface IProps {
  onFileAdded: (file: FormData) => void;
}

const Dropzone: React.FunctionComponent<IProps> = ({
  onFileAdded,
}) => {
  const readFile = (file: File) => {
    const formData = new FormData()
    formData.append('file', file);
    onFileAdded(formData)
  }

  const onChange = (e: any) => readFile(e.target.files[0])

  const onDrop = (e: any) => {
    e.preventDefault();
    readFile(e.dataTransfer.files[0]);
  }

  const onDragOver = (e: any) => e.preventDefault();

  return (
    <label
      className="dropzone-container"
      onDrop={onDrop}
      onDragOver={onDragOver}
      htmlFor="file"
    >
      <input
        id="file"
        className="file-input"
        type="file"
        onChange={onChange}
        accept=".jpg, .png, .pdf, .zip"
      />
      <img
        alt="upload"
        className="icon"
        src="images/upload-to-cloud.png"
      />
      <span>Upload Files</span>
    </label>
  );
}

export default Dropzone;
