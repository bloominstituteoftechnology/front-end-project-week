import styled from 'styled-components';

export const ComponentBody = styled.div`
    width: 94%;
    margin: auto 3%;
    .Notes{
        display: flex;
        margin-top: 15px;
        flex-wrap: wrap;
    }
    .buttons{
        display: flex;
        justify-content: flex-end;
        font-size: 0.8rem;
        margin-top: 5px;
        font-weight: bold;
        .editButtons{
            margin-left: 5px;
            text-decoration: underline;
        }
    }
    .noteContent{
        text-align: left;
        margin-top: 15px;
    }
`

export const ComponentHeader = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    margin-top: 30px;
`

export const NavStyled = styled.div`
    height: 100%;
    border: 1px solid;
    background-color: #CDCCCD;
    width: 22%;
`

export const AppHeader = styled.div`
    font-size: 1.8rem;
    text-align: left;
    font-weight: bold;
    line-height: 1;
    margin: 10px;
`

export const NavButton = styled.div`
    margin: 10px;
    font-size: 1rem;
    background-color: #20AFB5;
    border: 1px solid;
    padding: 10px;

    a {
        text-decoration: none;
        color: #FFFFFF;
    }
`

export const PageWrapper = styled.div`
    display: flex;
    height: 100%;
`
export const Body = styled.div`
    width: 100%;
    border: 1px solid;
    background-color: #F0EFF0;
`

export const ButtonStyled = styled.div`
    width: 150px;
    margin-top: 10px;
    font-size: 0.8rem;
    background-color: #20AFB5;
    border: 1px solid;
    padding: 10px;
    color: #FFFFFF;
`

export const InnerTitleBox = styled.div`
    justify-content: flex-start;
`

export const FormStyled = styled.div`
    border: 2px solid;
    margin: auto;
    width: 35%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const TitleInput = styled.input`
    width: 100%;
    height: 25px;
    padding-left: 10px;
    border-radius: 3px;
    border: 1px #CDCDCD solid;
    margin-top: 20px;
`

export const ContentInput = styled.textarea`
    width: 100%;
    border-radius: 3px;
    margin-top: 15px;
    padding-left: 10px;
    padding-top: 10px;
    border-radius: 3px;
    border: 1px #CDCDCD solid;
`

export const FormTitle = styled.div`
    font-size: 1.4 rem;
    font-weight: bold;
    width: 100%;
    display: flex;
`

export const NoteStyled = styled.div`
    border: 2px #CDCDCD solid;
    margin: auto;
    width: 30%;
    padding: 10px;
    margin-top: 10px;
    font-size: 1rem;
    height: 200px;
    background-color: #FFFFFF;
    text-align: left;
    border-radius: 3px;
    .noteContent{
        padding-top: 5px;
    }
`

export const TitleStyled = styled.div`
    border-bottom: 1px solid;
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 5px;
`