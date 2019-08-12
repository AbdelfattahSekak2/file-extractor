import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import Uploader from ".";

describe("Uploader component", () => {
  const getExtraction = jest.fn();
  const defaultProps = {
    getExtraction,
  }
  const wrapper: ShallowWrapper = shallow(<Uploader {...defaultProps} />)
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  })

  it("should call getExtraction when onFileAdded is fired", () => {
    const file = new FormData;
    //@ts-ignore
    wrapper.find("Dropzone").props().onFileAdded(file)
    expect(getExtraction).toHaveBeenCalled();
  })
})
