import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import PredictionItem, { getProbability } from ".";

describe("PredictionItem component", () => {
  const element = {
    probability: 1,
    value: "value",
  };
  const defaultProps = {
    element,
    label: "label",
  };
  let wrapper: ShallowWrapper;
  it("should render correctly", () => {
    wrapper = shallow(<PredictionItem {...defaultProps} />);
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should should match snapshot when element is a list", () => {
    wrapper = shallow(<PredictionItem {...defaultProps} element={[element, element]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should should match snapshot when subValue is defined", () => {
    wrapper = shallow(<PredictionItem {...defaultProps} element={[
      {
        ...element,
        subValue: {
          label: "label",
          value: "value",
        },
      }
      , element]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("getProbability function", () => {

  it("should return the correct object when the probability is other than 1", () => {
    expect(getProbability(0.8)).toEqual({
      borderRadius: "0",
      width: "80%",
    });
  });
  it("should return the correct object when the probability equal 1", () => {
    expect(getProbability(1)).toEqual({
      borderRadius: "0 6px 6px 0",
      width: "100%",
    });
  });
});
