import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';

const PgeCtnr = styled.div`
    width: 100%;
    margin: auto;
`;

const NtsMdlCtnr = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
`;

const NtsMdlTgl = styled.button`
    background-color: #f44336; /* Red */
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
        background-color: white;
        color: #f44336;
        cursor: pointer;
    }
`;

const NtsMdlDsp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NtsMdlHdr = styled.h1`
    margin: 10%;
    margin-top: 15%
    font-size: 1.6rem;
    text-align: center;
`;

const NtsMdlDspCtnr = styled.div`
    margin-top: 5%;
`;

const NtsMdlBtn = styled.button`
    background-color: #e7e7e7;
    border: none;
    border-radius: 8px;
    color: black;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 15px;

    :focus {
        outline: none;
    }
`;

export default class NtsMdlVw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    hdldltfn = () => {
        this.props.hdldltnt(this.props.nts_idv._id);
        this.props.history.push("/nts")
    };

    render() {
        return (
            <PgeCtnr>
                <NtsMdlCtnr>
                    <NtsMdlTgl onClick={() => this.openModal()}>Remove</NtsMdlTgl>
                    <Modal 
                        visible={this.state.visible}
                        width="400"
                        height="300"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                        <NtsMdlDsp>
                            <NtsMdlHdr>Are you sure you want to remove this?</NtsMdlHdr>
                            <NtsMdlDspCtnr>
                                <NtsMdlBtn onClick={() => this.hdldltfn()}>Remove</NtsMdlBtn>
                                <NtsMdlBtn onClick={() => this.closeModal()}>Close</NtsMdlBtn>
                            </NtsMdlDspCtnr>
                        </NtsMdlDsp>
                    </Modal>
                </NtsMdlCtnr>
            </PgeCtnr>
        );
    }
}