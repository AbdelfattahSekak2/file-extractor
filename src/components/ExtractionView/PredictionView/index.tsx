import * as React from "react";

import { Prediction, Tax } from "../../../interfaces/extraction";

import "./index.scss";
import PredictionItem from "./PredictionItem";

interface IProps {
  prediction: Prediction;
}

const PredictionView: React.FunctionComponent<IProps> = ({
  prediction,
}) => {
  const { orientation, taxes, date, total, category } = prediction;
  return (
    <div className="prediction-container" >
      {
        orientation &&
        <PredictionItem
          label="Orientation"
          element={{
            probability: orientation.probability,
            sign: "°",
            value: orientation.degrees,
          }}
        />
      }
      {
        category &&
        <PredictionItem
          label="Category"
          element={{
            probability: category.probability,
            value: category.value,
          }}
        />
      }
      {
        date &&
        <PredictionItem
          label="Date"
          element={{
            probability: date.probability,
            value: date.date_INTL,
          }}
        />
      }
      {
        total &&
        <PredictionItem
          label="Total"
          element={{
            probability: total.probability,
            sign: "€",
            value: total.amount,
          }}
        />
      }
      {
        taxes && taxes.length > 0 &&
        <PredictionItem
          label="Taxes"
          element={taxes.map((e: Tax) => ({
            probability: e.probability,
            sign: "€",
            subValue: {
              label: "Rate",
              value: e.rate,
            },
            value: e.amount,
          }))}
        />
      }
    </div >
  );
};

export default PredictionView;
