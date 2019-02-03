import styled from "styled-components";
import "../../styles/custom-props.css";

const root = getComputedStyle(document.body);
const primaryBtnColor = root.getPropertyValue("--main-btn-bg");
const dangerBtnColor = root.getPropertyValue("--danger-btn-bg");
const GeneralBtn = styled.button`
  color: var(--btn-font-color);
  height: ${props => (props.height !== undefined ? props.height : "3rem")};
  width: ${props => (props.width !== undefined ? props.width : "100%")};
  background: ${props => (props.danger ? dangerBtnColor : primaryBtnColor)};
  border-color: var(--main-border-color);
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
`;


export default GeneralBtn;
