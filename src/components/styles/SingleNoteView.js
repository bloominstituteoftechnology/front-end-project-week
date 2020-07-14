import styled from 'styled-components';

const Card = styled.div`
       width:350px;
        transition: 0.3s;
        height: 280px;
        padding:30px 20px 15px 20px;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.45);
        overflow: hidden;
        text-overflow: ellipsis;
        text-align:justify;
        background: #F7EA2B;
        color:blue;
        h3 {
            color:red;
            margin-top:0px;
            text-align:center;
            font-size:22px;
            
        }
        
`
export default Card;