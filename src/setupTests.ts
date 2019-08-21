import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// tslint:disable-next-line: only-arrow-functions
window.matchMedia = window.matchMedia || function() {
  return {
    // tslint:disable-next-line: no-empty
    addListener() {},
     // tslint:disable-next-line: no-empty
    removeListener() {},
    matches: false,
  };
};
