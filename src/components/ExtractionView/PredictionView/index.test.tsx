import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import PredictionView from "."

import { extraction } from "../../../mocks/extraction";

describe("PredictionView  component", () => {
  let wrapper: ShallowWrapper;
  const prediction: any = extraction.predictions[0];
  it("should render correctly", () => {
    wrapper = shallow(<PredictionView count={1} prediction={prediction} />);
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when total is undefined", () => {
    wrapper = shallow(<PredictionView count={1} prediction={{
      ...prediction,
      total: undefined,
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot when category is undefined", () => {
    wrapper = shallow(<PredictionView count={1} prediction={{
      ...prediction,
      category: undefined,
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot when date is undefined", () => {
    wrapper = shallow(<PredictionView count={1} prediction={{
      ...prediction,
      date: undefined,
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot when orientation is undefined", () => {
    wrapper = shallow(<PredictionView count={1} prediction={{
      ...prediction,
      orientation: undefined,
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot when taxes is undefined", () => {
    wrapper = shallow(<PredictionView count={1} prediction={{
      ...prediction,
      taxes: undefined,
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should match snapshot when taxes is empty", () => {
    wrapper = shallow(<PredictionView count={1} prediction={{
      ...prediction,
      taxes: [],
    }} />);
    expect(wrapper).toMatchSnapshot();
  });
})
