import * as React from "react";
import Slider from "react-slick";
import { Dimmer, Loader } from "semantic-ui-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Extraction, { Prediction } from "../../interfaces/extraction";

import { GetExtraction } from "../../actionTypes/extraction";
import { ApiState } from "../../interfaces/apiState";
import "./index.scss";
import PredictionView from "./PredictionView";

interface IProps {
  apiPendingRequests: ApiState[];
  extraction: Extraction | null;
}

const settings = {
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500,
};

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
    content = <div className="extraction-container">
      <h1>Predictions</h1>
      <Slider {...settings}>
        {
          extraction.predictions.map(
            (item: Prediction, key: number) => <PredictionView key={key} prediction={item} />,
          )
        }
      </Slider>
    </div>;
  }
  return content;
};

export default ExtractionView;
