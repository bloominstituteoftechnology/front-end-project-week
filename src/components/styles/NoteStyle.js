import styled from 'styled-components';

 const NoteStyle = styled.div`
    width: 30%;
    margin: 20px 10px;
    cursor:pointer;
    &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    .note {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        height: 280px;
        padding:5px 30px 15px 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align:justify;
        background:#F0FFF0;
        ${'' /* margin-bottom:20px */}
        

        h3 {
            text-align:left;
            border-bottom: 1px solid rgba(0,0,0,.8);
        }

    }
`

export default NoteStyle;