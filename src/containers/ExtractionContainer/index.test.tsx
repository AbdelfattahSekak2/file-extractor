
import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ExtractionContainer from ".";

import { extraction } from "../../mocks/extraction";

describe("Extraction conatiner", () => {
  const initialState = {
    apiPendingRequests: [],
    extraction,
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  const wrapper: ShallowWrapper = shallow(<Provider store={store} >
    <ExtractionContainer />
  </Provider>
  )
  it("should render correctly", () => {
    expect(wrapper).not.toBeNull();
  });
});
