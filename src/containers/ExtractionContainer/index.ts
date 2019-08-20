import { connect } from "react-redux";

import ExtractionView from "../../components/ExtractionView";

const mapStateToProps = (state: any) => {
  return {
    apiPendingRequests: state.apiPendingRequests,
    extraction: state.extraction,
  };
};

export default connect(
  mapStateToProps,
)(ExtractionView);
