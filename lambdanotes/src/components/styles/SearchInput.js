import styled from 'styled-components';

const SearchInput = styled.input`
    position:absolute;
    top:18px;
    left: 40px; 
    width: 290px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
    font-weight:bold;
    background-color: white;
    ${'' /* background-image: url('searchicon.png'); */}
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.2s ease-in-out;
    &:focus {
    width: 90%;
    }
`
export default SearchInput;