import React, {Component} from "react";
import { connect } from "react-redux";

const actions = { closeModal };

export class TestModal extends Component {
    render() {
        return (
            <Modal
                closeIcon="close"
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>Delete Note</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <p>Are you sure you want to delete this?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default connect(null, actions)(TestModal);