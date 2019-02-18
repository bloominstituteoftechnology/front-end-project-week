import styled from 'styled-components';

const Modal = styled.div`
        position: fixed;
        top: 25%;
        left:22%;
        color:yellow;
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
        width: 50%;
        padding: 90px 30px 60px 60px;
        margin:100px auto;
        .sign {
           width:280px;
           background:rgba(255,0,0,.9);
           margin-top:20px;
           padding:12px;
           margin-right:20px;
           color:yellow;
           cursor:pointer;
       }
        ${'' /* p{
            color: orange;
        }
       .delete {
           display:flex;
           justify-content:center;
           align-items:center;
       }
      
       .no-button {
           width:230px;
           background:rgb(66, 244, 235,.9);
           padding:12px;
           margin-right:20px;
       } */}

`

export default Modal;
