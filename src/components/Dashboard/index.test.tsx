import React from "react";
import { ShallowWrapper, shallow } from "enzyme";

import Dashboard from ".";

describe("Dashboard component", () => {
  let wrapper: ShallowWrapper = shallow(<Dashboard />)
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  })
})
