import { mount, ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import React from "react";

import ErrorMessage from ".";

describe("ErrorMessage component", () => {
  const clearError = jest.fn();
  let wrapper: ShallowWrapper | ReactWrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage error="error" clearError={clearError} />);
  });

  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it("should open modal correctly when error is updated", () => {
    wrapper = mount(<ErrorMessage error={null} clearError={clearError} />);
    expect(wrapper.find("Modal").prop("open")).toEqual(false);

    wrapper = mount(<ErrorMessage error="error" clearError={clearError} />);
    expect(wrapper.find("Modal").prop("open")).toEqual(true);
  });

  it("should handle clear state correctly", () => {
    wrapper.find("Button").simulate("click");
    expect(wrapper.find("Modal").prop("open")).toEqual(false);
    expect(clearError).toHaveBeenCalled();
  });

  it("should handle on close state correctly", () => {
    // @ts-ignore
    wrapper.find("Modal").props().onClose();
    expect(wrapper.find("Modal").prop("open")).toBeFalsy();
  });
});
