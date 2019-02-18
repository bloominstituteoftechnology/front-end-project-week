import styled from 'styled-components';

const Modal = styled.div`
        position: fixed;
        top: 5%;
        left:30%;
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
        padding: 20px 30px 60px 60px;
        margin:100px auto;
        .h1{
          font-size:32px;
          text-align:left;
          display:flex;
          justify-content:start;
          margin-left: -250px;
        }
       
        .para {
          margin:0px;
          margin-left:-120px;
          margin-bottom:-5px;
          margin-top:10px;
          padding:0px;
          color:#DAA520;
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
