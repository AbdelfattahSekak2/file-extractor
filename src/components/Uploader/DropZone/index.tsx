
import React from "react";
import { Icon } from "semantic-ui-react";

import "./index.scss";

interface IProps {
  onFileAdded: (file: File) => void;
  setError: (message: string) => void;
}

const supportedFiles = [
  "jpeg",
  "jpg",
  "png",
  "pdf",
  "zip",
];

const Dropzone: React.FunctionComponent<IProps> = ({
  onFileAdded,
  setError,
}) => {
  const onChange = (e: any) => handleOnFileAdded(e.target.files[0]);

  const handleOnFileAdded = (file: File) => {
    if (supportedFiles.some((e: string) => file.type.includes(e))) {
      onFileAdded(file);
    } else {
      setError("The file extension is not supported");
    }
  };

  const onDrop = (e: any) => {
    e.preventDefault();
    handleOnFileAdded(e.dataTransfer.files[0]);
  };

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
        accept={"." + supportedFiles.join(", .")}
      />
      <Icon name="cloud upload" size="huge" />
    </label>
  );
};

export default Dropzone;
