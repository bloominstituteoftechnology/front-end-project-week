import styled from 'styled-components';

 const SingleNote = styled.div`
    background: red;
    width:90%;
    margin:40px auto;
    .note {
        width:100%;
        transition: 0.3s;
        height: 500px;
        padding:120px 100px 15px 100px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        overflow: hidden;
        text-overflow: ellipsis;
        text-align:justify;
        background: #fff;
        position:relative;
    }
`

export default SingleNote;