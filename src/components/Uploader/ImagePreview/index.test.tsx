import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import React from "react";

import * as helpers from "./helpers";

import ImagePreview from ".";
import { extraction } from "../../../mocks/extraction";

describe("ImagePreview component", () => {
  // @ts-ignore
  helpers.handleCanvas = jest.fn();
  window.URL.createObjectURL = jest.fn(() => "url");
  const handleDelete = jest.fn();
  const file = new File([""], "filename", { type: "text/html" });
  const setError = jest.fn();
  const defaultProps = {
    extraction,
    file,
    handleDelete,
    setError,
    supported: true,
  };
  let wrapper: ShallowWrapper | ReactWrapper;

  it("should render correctly", () => {
    wrapper = shallow(<ImagePreview {...defaultProps} />);
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle file deletion correctly", () => {
    wrapper = mount(<ImagePreview {...defaultProps} />);
    expect(helpers.handleCanvas).toHaveBeenCalled();
  });

});
