import * as React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

import Extraction, { Prediction } from "../../interfaces/extraction";

import { GetExtraction } from "../../actionTypes/extraction";
import { ApiState } from "../../interfaces/apiState";
import "./index.scss";
import PredictionView from "./PredictionView";

interface IProps {
  apiPendingRequests: ApiState[];
  extraction: Extraction | null;
}

const ExtractionView: React.FunctionComponent<IProps> = ({
  extraction,
  apiPendingRequests,
}) => {
  let content: React.ReactElement | null = null;
  const loading = apiPendingRequests.some((item: ApiState) => item.type === GetExtraction.REQUEST);
  if (loading) {
    content = <Dimmer active>
      <Loader size="huge" indeterminate>Preparing your file</Loader>
    </Dimmer>;
  } else if (extraction && extraction.predictions && extraction.predictions.length > 0) {
    content = <div className="extraction-container">{
      extraction.predictions.map(
        (item: Prediction, key: number) => <PredictionView count={key + 1} key={key} prediction={item} />,
      )
    }</div>;
  }
  return content;
};

export default ExtractionView;
