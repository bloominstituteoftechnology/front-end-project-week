import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 48.3vw;
    min-width: 1024px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9.21%;
    background-color: rgba(216, 216, 216, 0.8);
`;

const Modal = styled.div`
    padding-top: 4.8%;
    padding-bottom: 5.05%;
    border: black 1px solid;
    width: 59.8%;
    min-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 35%;
    min-height: 210px;
    background-color: white;
`;

const P = styled.p`
    font-size: 22px;
    font-family: 'Roboto';
    font-weight: 400;
    margin: 0;
    margin-left: -1.6%;
    word-spacing: -0.4px;
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-column-gap: 5%;
    height: 45%;
    width: 76%;
    grid-template-columns: 1fr 1fr;
    a {
        text-decoration: none;
    }
`;

const StyledButton = styled(Button)`
    width: 100%;
    height: 100%;
    font-family: 'Raleway';
    display: block;
    min-height: 40px;
`;

function DeleteModal(props) {
    const [home, setHome] = useState(false);
    const [id] = useState(props.match.params._id);
    console.log('delete', props);

    const deleteNote = () => {
        setHome(true);
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(setHome(true))
            .catch(err => console.log(err));
    };

    return home === true ? (
        <Redirect to="/" />
    ) : (
        <Div>
            <Modal>
                <P>Are you sure you want to delete this?</P>
                <ButtonContainer>
                    <StyledButton
                        warn={true}
                        text="Delete"
                        onClick={() => deleteNote()}
                    />
                    <Link to={`/notes/${id}`}>
                        <StyledButton text="No" />
                    </Link>
                </ButtonContainer>
            </Modal>
        </Div>
    );
}

// class DeleteModal extends Component {
//     deleteNote = id => {
//         axios
//             .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
//             .then(this.props.get());
//     };

//     render() {
//         return (
//             <Div>
//                 <Modal>
//                     <P>Are you sure you want to delete this?</P>
//                     <ButtonContainer>
//                         <StyledButton
//                             warn={true}
//                             text="Delete"
//                             onClick={props =>
//                                 this.deleteNote(this.props.match.params._id)
//                             }
//                         />
//                         <Link to={`/notes/${this.props.match.params._id}`}>
//                             <StyledButton text="No" />
//                         </Link>
//                     </ButtonContainer>
//                 </Modal>
//             </Div>
//         );
//     }
// }

export default DeleteModal;
