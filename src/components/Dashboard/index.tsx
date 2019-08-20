import * as React from "react";

import "./index.scss";

import ErrorContainer from "../../containers/ErrorContainer";
import ExtractionContainer from "../../containers/ExtractionContainer";
import UploderContainer from "../../containers/UploderContainer";

const Dashboard: React.FunctionComponent = () => (
  <div className="dashboard-container">
    <div className="dashboard-title"><strong>Mindee</strong> File Extractor</div>
    <div className="content">
      <ErrorContainer />
      <UploderContainer />
      <ExtractionContainer />
    </div>
  </div>
);

export default Dashboard;
