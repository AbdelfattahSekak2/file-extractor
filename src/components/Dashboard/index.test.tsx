import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import Dashboard from ".";

describe("Dashboard component", () => {
  const wrapper: ShallowWrapper = shallow(<Dashboard />);
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });
});
