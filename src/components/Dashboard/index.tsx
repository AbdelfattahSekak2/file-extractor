import * as React from "react";

import "./index.scss";

import UploderContainer from "../../containers/UploderContainer";
import ExtractionContainer from "../../containers/ExtractionContainer";
import ErrorContainer from "../../containers/ErrorContainer";

const Dashboard: React.FunctionComponent = () => (
  <div className="dashboard-container">
    <div className="dashboard-title"><strong>Mindee</strong> File Extractor</div>
    <div className="content">
      <ErrorContainer />
      <UploderContainer />
      <ExtractionContainer />
    </div>
  </div>
)

export default Dashboard;

