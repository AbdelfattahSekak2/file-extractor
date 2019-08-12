import React from "react";
import { ShallowWrapper, shallow, ReactWrapper } from "enzyme";

import Dropzone from ".";

describe("Dropzone component", () => {
  const file = new FormData;
  const preventDefault= jest.fn();
  const onFileAdded = jest.fn();
  let wrapper: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapper = shallow(<Dropzone onFileAdded={onFileAdded} />)
  })
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  })

  it("should handle change correctly", () => {
    const event = {
      target: {
        files: [file]
      }
    }
    // @ts-ignore
    wrapper.find("input").props().onChange(event)
    expect(onFileAdded).toHaveBeenCalled()
  })

  it("should handle drop correctly", () => {
    const event = {
      preventDefault,
      dataTransfer: {
        files: [file]
      }
    }
     // @ts-ignore
    wrapper.find(".dropzone-container").props().onDrop(event)
    expect(onFileAdded).toHaveBeenCalled()
  })

})
