import * as React from "react";

import "./index.scss";

interface Element {
  value: string | number;
  sign?: string;
  subValue?: {
    label: string;
    value: string | number;
  }
  probability: number;
}

interface IProps {
  label: string;
  element: Element | Element[];
}

export const getProbability = (probability: number) => ({
    width: `${probability * 100}%`,
    borderRadius: probability === 1 ? "0 6px 6px 0" : "0",
  })

const SubValue = ({ value, label }: { value: string | number; label: string }) => <>
  ({label} : <strong>{value}</strong>)
</>;

const PredictionItem: React.FunctionComponent<IProps> = ({
  label,
  element,
}) => {
  return <div className="prediction-item">
    <label>{label}</label>
    {
      Array.isArray(element)
        ? <div className="details-list">
          {
            element.map((item: Element, key: number) =>
              <div className="details" key={key} >
                <p>
                  {item.value}{item.sign} {item.subValue ? <SubValue {...item.subValue} /> : null}
                </p>
                <div className="bar" style={getProbability(item.probability)} />
              </div>
            )
          }
        </div>
        : <div className="details">
          <p>{element.value}{element.sign}</p>
          <div className="bar" style={getProbability(element.probability)} />
        </div>
    }
  </div>;
};

export default PredictionItem;

