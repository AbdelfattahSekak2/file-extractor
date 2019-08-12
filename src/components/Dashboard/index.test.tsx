import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import Dashboard from ".";

describe("Dashboard component", () => {
  const wrapper: ShallowWrapper = shallow(<Dashboard />)
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  })
})
