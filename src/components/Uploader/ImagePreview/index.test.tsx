import React from "react";
import { ShallowWrapper, shallow, mount, ReactWrapper } from "enzyme";

import * as helpers from "./helpers";

import ImagePreview from ".";
import { extraction } from "../../../mocks/extraction";

describe("ImagePreview component", () => {
  // @ts-ignore
  helpers.handleCanvas = jest.fn();
  window.URL.createObjectURL = jest.fn(() => "url");
  const handleDelete = jest.fn();
  const file = new File([""], "filename", { type: 'text/html' });
  const setError = jest.fn();
  const defaultProps = {
    setError,
    handleDelete,
    file,
    extraction,
    supported: true,
  }
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
