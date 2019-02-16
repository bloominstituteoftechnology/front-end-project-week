import styled from 'styled-components';

const DeleteContainer = styled.div`
        position: fixed;
        top: 15%;
        left:29%;
        background-color: rgba(0,0,0,0.65);
        z-index: 2;
        display:flex;
        ${'' /* display: none; */}
        flex-direction:column;
        justify-content: space-between;
        align-items:center;
        ${'' /* background: #fff; */}
        border:1px solid rgba(0,0,0,.65);
        align-items: center;
        width: 60%;
        padding: 60px 30px 60px 60px;
        margin:100px auto;
        p{
            color: orange;
        }
       .delete {
           display:flex;
           justify-content:center;
           align-items:center;
       }
       .delete-button {
           width:230px;
           background:rgba(255,0,0,.9);
           padding:12px;
           margin-right:20px;
       }
       .no-button {
           width:230px;
           background:rgb(66, 244, 235,.9);
           padding:12px;
           margin-right:20px;
       }

`

export default DeleteContainer;
