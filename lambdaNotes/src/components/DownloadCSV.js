import React from "react";

// DownloadCSV component is presentation component with download button
const DownloadCSV = props => {
  return (
    <div className="downloadCSV">
      <button onClick={props.downloadCSV}>Download CSV</button>
    </div>
  );
};

export default DownloadCSV;
