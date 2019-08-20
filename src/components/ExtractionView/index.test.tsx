import React from "react";

import ExtractionView from "."
import { ShallowWrapper, shallow } from "enzyme";
import { extraction } from "../../mocks/extraction";
import { GetExtraction } from "../../actionTypes/extraction";

describe("ExtractionView component", () => {
  const defaultProps = {
    apiPendingRequests: [],
    extraction,
  }
  let wrapper: ShallowWrapper;
  it("should render correctly", () => {
    wrapper = shallow(<ExtractionView {...defaultProps} />);
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when it's data loading", () => {
    const apiPendingRequests = [{ type: GetExtraction.REQUEST }];
    wrapper = shallow(<ExtractionView {...defaultProps} apiPendingRequests={apiPendingRequests} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should match snapshot when extraction is null", () => {
    wrapper = shallow(<ExtractionView apiPendingRequests={[]} extraction={null} />);
    expect(wrapper).toMatchSnapshot();
  });
})
