import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import PredictionItem, { getProbability } from "."

describe("PredictionItem component", () => {
  const element = {
    value: "value",
    probability: 1,
  };
  const defaultProps = {
    label: "label",
    element
  }
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
          value: "value",
          label: "label"
        },
      }
      , element]} />);
    expect(wrapper).toMatchSnapshot();
  });
});


describe("getProbability function", () => {

  it("should return the correct object when the probability is other than 1", () => {
    expect(getProbability(0.8)).toEqual({
      width: "80%",
      borderRadius: "0",
    });
  });
  it("should return the correct object when the probability equal 1", () => {
    expect(getProbability(1)).toEqual({
      width: "100%",
      borderRadius: "0 6px 6px 0",
    });
  });
});
