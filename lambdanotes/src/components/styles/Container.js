import styled from 'styled-components';

const Container = styled.div`
       display:flex;
       justify-content: space-between;
       align-items: center;
       flex-wrap:wrap;
       width:100%;
       padding: 0px 30px 20px 30px;
       ${'' /* margin: 10px auto; */}
       .form {
           display:flex;
           flex-direction:column;
           justify-content:flex-start;
           align-items:flex-start;

         .input {
               width: 60%;
               padding: 12px 15px;
               background: #fff;
           }
           .textarea {
               padding: 12px 15px;
               font-size: 1rem;
           }
           .save {
               width: 60%;
               margin-left:0px;
           }
       }
`

export default Container;
