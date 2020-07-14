import React, { Component } from 'react';
import ReactExport from 'react-data-export';
import './Export.css';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("PROPS", this.props)
        return (
            <div className="download-container"> 
                <h5 className="download-header">Click "Download" button to download note list as an excel spreadsheet</h5> 
                <ExcelFile element={<button className="download">Download</button>}>
                    <ExcelSheet data={this.props.notes} name="notes">
                        <ExcelColumn label="Title" value="title" />
                        <ExcelColumn label="Body" value="body" />
                    </ExcelSheet>
                </ExcelFile>
            </div>
         )
    }
}
 
export default Export;