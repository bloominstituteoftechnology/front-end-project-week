import React from "react";


const DownloadCSV = props => {
  let note = "";




  return (
    <div className="downloadCSV">
     <button onClick={props.downloadCSV}>Download CSV</button> 
    </div>
  );
};

export default DownloadCSV;
