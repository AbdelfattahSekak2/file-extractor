import * as React from "react";

import { Prediction, Tax } from "../../../interfaces/extraction";

import "./index.scss";
import PredictionItem from "./PredictionItem";

interface IProps {
  prediction: Prediction;
  count: number;
}

const PredictionView: React.FunctionComponent<IProps> = ({
  prediction,
  count,
}) => {
  const { orientation, taxes, date, total, category } = prediction;
  return (
    <div className="prediction-container" >
      <div className="title">Prediction {count}</div>
      {
        orientation &&
        <PredictionItem
          label="Orientation"
          element={{
            value: orientation.degrees,
            sign: "°",
            probability: orientation.probability,
          }}
        />
      }
      {
        category &&
        <PredictionItem
          label="Category"
          element={{
            value: category.value,
            probability: category.probability,
          }}
        />
      }
      {
        date &&
        <PredictionItem
          label="Date"
          element={{
            value: date.date_INTL,
            probability: date.probability,
          }}
        />
      }
      {
        total &&
        <PredictionItem
          label="Total"
          element={{
            value: total.amount,
            sign: "€",
            probability: total.probability,
          }}
        />
      }
      {
        taxes && taxes.length > 0 &&
        <PredictionItem
          label="Taxes"
          element={taxes.map((e: Tax) => ({
            value: e.amount,
            sign: "€",
            subValue: {
              label: "Rate",
              value: e.rate,
            },
            probability: e.probability,
          }))}
        />
      }
    </div >
  );
}

export default PredictionView;

