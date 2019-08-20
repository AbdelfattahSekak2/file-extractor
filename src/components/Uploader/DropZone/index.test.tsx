import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Dropzone from ".";

describe("Dropzone component", () => {
  let file = new File([""], "filename", { type: "image/jpg" });
  const preventDefault = jest.fn();
  const onFileAdded = jest.fn();
  let wrapper: ShallowWrapper | ReactWrapper;
  const setError = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Dropzone onFileAdded={onFileAdded} setError={setError}/>);
  });
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });

  it("should handle change correctly", () => {
    const event = {
      target: {
        files: [file],
      },
    };
    // @ts-ignore
    wrapper.find("input").props().onChange(event);
    expect(onFileAdded).toHaveBeenCalled();
  });

  it("should handle drop correctly", () => {
    const event = {
      dataTransfer: {
        files: [file],
      },
      preventDefault,
    };
     // @ts-ignore
    wrapper.find(".dropzone-container").props().onDrop(event);
    expect(onFileAdded).toHaveBeenCalled();
  });

  it("should handle errors correctly", () => {
    file = new File([""], "filename", { type: "image/whatever" });
    const event = {
      dataTransfer: {
        files: [file],
      },
      preventDefault,
    };
     // @ts-ignore
    wrapper.find(".dropzone-container").props().onDrop(event);
    expect(setError).toHaveBeenCalled();
  });

});
