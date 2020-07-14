import React, { Component } from "react";
import ReactExport from "react-data-export";

import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        note: "Note 1",
        item: 30001,
        completed: true
    },
    {
        note: "Note 3",
        item: 30002,
        completed: true
    },
    {
        note: "Note 3",
        item: 30003,
        completed: true
    },
    {
        note: "Note 4",
        item: 30004,
        completed: true
    }
];


class ExcelNote extends Component {
    render() {
        return (
            <ExcelFile element={<Button className="download" color="info" >Download Notes</Button>}>
                <ExcelSheet data={dataSet1} name="Notes">
                    <ExcelColumn label="Note" value="note"/>
                    <ExcelColumn label="Item" value="amount"/>
                    <ExcelColumn label="Completed"
                                 value={(col) => col.is_completed ? "Completed" : ""}/>
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default ExcelNote;