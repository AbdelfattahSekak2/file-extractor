import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Uploader from ".";

import { act } from "react-test-renderer";
import { GetExtraction } from "../../actionTypes/extraction";
import { extraction } from "../../mocks/extraction";

describe("Uploader component", () => {
  window.URL.revokeObjectURL = jest.fn();
  const setError = jest.fn();
  const getExtraction = jest.fn();
  const clearExtractionState = jest.fn();
  const file = new File([""], "filename", { type: "application/pdf" });
  const apiPendingRequests = [{ type: GetExtraction.REQUEST }];
  const defaultProps = {
    apiPendingRequests: [],
    clearExtractionState,
    extraction,
    getExtraction,
    setError,
  };
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Uploader {...defaultProps} />);
  });

  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly", () => {
    wrapper = shallow(<Uploader {...defaultProps} apiPendingRequests={apiPendingRequests} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call getExtraction when onFileAdded is fired", () => {
    // @ts-ignore
    wrapper.find("Dropzone").props().onFileAdded(file);
    expect(getExtraction).toHaveBeenCalled();
  });

  it("should read file correctly", () => {
    wrapper = shallow(<Uploader {...defaultProps} />);
    act(() => {
      // @ts-ignore
      wrapper.find("Dropzone").props().onFileAdded(file);
    });

    expect(wrapper.find("ImagePreview").prop("file")).toEqual(file);

    expect(getExtraction).toHaveBeenCalled();
  });

  it("should detele file correctly", () => {
    act(() => {
      // @ts-ignore
      wrapper.find("Dropzone").props().onFileAdded(file);
    });
    // @ts-ignore
    wrapper.find("ImagePreview").props().handleDelete();

    expect(clearExtractionState).toHaveBeenCalled();

    expect(window.URL.revokeObjectURL).toHaveBeenCalled();

    expect(wrapper.find("Dropzone")).toBeTruthy();
  });
});
