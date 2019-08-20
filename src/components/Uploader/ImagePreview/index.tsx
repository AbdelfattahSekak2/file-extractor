import React, { useEffect, useRef, Ref } from "react";
import cx from "classnames";
import { Icon } from "semantic-ui-react";

import "./index.scss";

import Extraction from "../../../interfaces/extraction";

import Canvas, { handleCanvas } from "./helpers";

interface IProps {
  file: File;
  handleDelete: () => void;
  extraction: Extraction;
  setError: (message: string) => void;
  supported: boolean
}

const ImagePreview: React.FunctionComponent<IProps> = ({
  handleDelete,
  file,
  extraction,
  setError,
  supported,
}) => {
  const canvasRef: Ref<HTMLCanvasElement> = useRef(null);

  useEffect(() => {
    if (
      extraction.predictions
      && extraction.predictions.length > 0
      && canvasRef.current
      && supported
    ) {
      const canvas = new Canvas(canvasRef.current);
      handleCanvas(canvas, extraction, file, setError);
    }
  }, [extraction, file, setError, supported])
  return <div className="image-preview">
    <Icon name="times" size="big" onClick={handleDelete} className={cx({ supported })} />
    {
      supported
        ? <canvas ref={canvasRef} id="canvas" />
        : <div className="not-supported">
          <Icon name="frown" size="huge" />
          <p>Sorry, we cannot render this file</p>
        </div>
    }
  </div>;
};

export default ImagePreview;

