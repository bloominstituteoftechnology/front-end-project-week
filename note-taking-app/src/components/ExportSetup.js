import React from 'react';
import { connect } from 'react-redux';
import { makeConvertObjectToArray } from '../selectors';

import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportSetup = ({notes}) =>
    <ExcelFile element={
        <PrimaryButton
            style={style.PrimaryButton}
            iconProps={ { iconName: 'ExcelLogo16' } }
            text='Export'
        />
        }>
        <ExcelSheet data={notes? notes: []} name="Employees">
            <ExcelColumn label="Title" value="title"/>
            <ExcelColumn label="Content" value="content"/>
        </ExcelSheet>
    </ExcelFile>


const mapStateToProps = (state) => {
    const convertObjectToArray = makeConvertObjectToArray()
    return (state) => convertObjectToArray(state.notesReducer.notes)
}

const style = {
    PrimaryButton: {
      width: '100%',
      textAlign: 'left'
    }
}
export default connect(mapStateToProps, {})(ExportSetup);