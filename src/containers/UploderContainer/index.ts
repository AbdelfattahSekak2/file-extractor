import { connect } from "react-redux";

import { clearExtractionState, getExtraction } from "../../services/api/extraction/actions";
import { setError } from "../../services/state/error/actions";

import Uploader from "../../components/Uploader";

const mapStateToProps = (state: any) => {
  return {
    apiPendingRequests: state.apiPendingRequests,
    extraction: state.extraction,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearExtractionState: () => dispatch(clearExtractionState()),
    getExtraction: (file: FormData) => dispatch(getExtraction(file)),
    setError: (message: string) => dispatch(setError(message)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uploader);
