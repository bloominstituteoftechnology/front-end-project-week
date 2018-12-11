import React, { Component } from 'react';

import { MassDeleteButton, FormContainer } from '../../styles';

class SelectMode extends Component {
    render() {
        return (
            <FormContainer>
                <MassDeleteButton 
                    type="button"
                    amountChecked={this.props.checkedNotes.length}
                    onClick={e => {
                        e.preventDefault();
                        if (!this.props.checkedNotes.length) return;
                        this.props.deleteChecked(this.props.checkedNotes);
                        this.props.history.push('/app');
                    }}
                >Delete Selected</MassDeleteButton>
            </FormContainer>
        );
    }
}

export default SelectMode;
