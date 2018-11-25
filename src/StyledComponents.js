import styled from 'styled-components';


//SIDEBAR

export const SideBarDiv = styled.div`
    width: 25%;
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 3%;
    padding-right: 2%;
    background-color: rgb(211,210,211);
    min-height: 800px;
    max-height: 2000px;
`;

export const SideBarButton = styled.button`
    width: 22vw;
    height: 5vh;
    border: 1px solid rgb(169, 187, 188);
    display: inline-block;
    text-decoration: none;
    align-self: center;
    background: rgb(0, 187, 191);
    color: white;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover{
        border: 2px solid rgb(0, 187, 191);
        background: white;
        color: rgb(0, 187, 191);
    }
`;

export const Header = styled.h1`
    color: rgb(65, 65, 65);
    text-align: left;
    font-size: 3.4rem;
`;

//CREATENOTE

export const H2Header = styled.h2`
    color: rgb(65, 65, 65);
    text-align: left;
    font-size: 2.6rem;
    margin-top: 9vh;
`;

export const NoteContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 75%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 5%;
    background-color: rgb(242, 241, 242);
    flex-wrap: wrap;
    min-height: 800px;
`;

export const NoteForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const FormTitle = styled.input`
    width: 40vw;
    height: 4vh;
    margin: 15px 0;
    border: 2px solid rgb(214, 213, 214);
    padding-left: 1%;
`;

export const FormText = styled.textarea`
    width: 60vw;
    height: 35vh;
    margin-bottom: 15px;
    border: 2px solid rgb(214, 213, 214);
    padding-left: 1%;
`;

export const SubmitButton = styled.button`
    width: 22vw;
    height: 5vh;
    border: 1px solid rgb(169, 187, 188);
    display: inline-block;
    text-decoration: none;
    align-self: left;
    background: rgb(0, 187, 191);
    color: white;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover{
        border: 2px solid rgb(0, 187, 191);
        background: white;
        color: rgb(0, 187, 191);
    }
`;

//NOTES

export const SearchContainer = styled.div`
    display: flex;
    width: 92%;
    justify-content: space-between;
    align-items: center;
    margin-left: 1%;
    margin-right: auto;
    margin-bottom: 10px;

    input{
        text-align: center;
        line-height: 2.0rem;
    }
`;

//NOTE

export const StandardDiv = styled.div`
    background-color: rgb(242, 241, 242);
    width: 75%;
    padding-left: 3%;
    padding-top: 6vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: rgb(65, 65, 65);
        font-size: 2.6rem;
        margin-left: 3%;
        align-self: flex-start;
        // border: 1px solid pink;
    }
`;

export const NotesContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 95%;
    justify-content: flex-start;
    background-color: rgb(242, 241, 242);
    flex-wrap: wrap;
    // border: 1px solid blue;
`;

export const NoteDiv = styled.div`
    border: 2px solid rgb(220, 219, 220);
    margin: 5px 7px 20px 5px;
    width: 30%;
    height: 200px;
    background-color: white;

    &:hover{
        color: rgb(0, 187, 191);
        cursor: pointer;
    }

    h2 {
        font-size: 1.4rem;
        text-align: left;
        margin-left: 7%;
    }

    hr{
        width: 85%;
        border: 1px solid rgb(220, 219, 220);
    }

    p {
        font-size: 1.2rem;
        text-align: left;
        margin: 0 7% 0 7%;
        line-height: 22px;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
    }
`;


//FULL NOTE

export const NoteButton = styled.p`
    color: black;
    text-decoration: underline;
    font-size: 1.4rem;
    margin-right: 10px;
    cursor: pointer;

    &:hover{
        font-weight: bold;
        color: rgb(0, 187, 191);
    }
`;


export const NoteButtonContainer = styled.div`
    align-self: flex-end;
    display: flex;
`;

export const FullNoteContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 75%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 5%;
    background-color: rgb(242, 241, 242);
    flex-wrap: wrap;

    h2{
        font-weight: bold;
        font-size: 2.6rem;
    }

    p{
        font-size: 1.4rem;
        width: 80%;
        text-align: left;
    }
`;

//DELETE MODAL

export const DeleteModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(30,30,30);
    background-color: rgb(30,30,30,0.4);
`;

export const DeleteModalDiv = styled.div`
    width: 50%;
    border: 1px solid #888;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalButtons = styled.div`
    font-size: 1.6rem;
    font-weight: bold;
    width: 40%;
    height: 5vh;
    border: 1px solid darkgrey;
    border-radius: 5px;
    background: ${props=> props.primary ? "rgb(0, 187, 191)" : "rgb(218, 0, 0)"};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: white;
        border: 1px solid ${props=> props.primary ? "rgb(0, 187, 191)" : "rgb(218, 0, 0)"};
        color: ${props=> props.primary ? "rgb(0, 187, 191)" : "rgb(218, 0, 0)"};
    }
`;