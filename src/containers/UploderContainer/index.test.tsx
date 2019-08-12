
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import UploaderContainer from ".";

describe("Container", () => {
  const initialState = {
    getExtraction: jest.fn()
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const wrapper: ShallowWrapper = shallow(<Provider store={store} >
    <UploaderContainer />
  </Provider>
  )
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });
});
