import * as React from "react";
import Dropzone from "../DropZone";

interface IProps {
  getExtraction: (file: FormData) => void;
}

const Uploader: React.FunctionComponent<IProps> = ({
  getExtraction,
}) => {
  return <div>
    <Dropzone onFileAdded={(file: any) => getExtraction(file)} />
  </div>;
};

export default Uploader;

