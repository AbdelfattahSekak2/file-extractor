import { connect } from "react-redux";

import ErrorMessage from "../../components/Utils/Error";

import { clearError } from "../../services/state/error/actions";

const mapStateToProps = (state: any) => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    clearError: () => dispatch(clearError()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorMessage);
