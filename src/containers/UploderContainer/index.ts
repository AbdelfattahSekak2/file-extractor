import { connect } from "react-redux";

import { getExtraction } from "../../services/api/extraction/actions";
import Uploader from "../../components/Uploader";

const mapDispatchToProps = (dispatch: any) => {
  return {
    getExtraction: (file: FormData) => dispatch(getExtraction(file)),
  };
};

export default connect(
  undefined,
  mapDispatchToProps,
)(Uploader);
