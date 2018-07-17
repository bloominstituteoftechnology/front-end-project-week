import React from "react";
import styled from "styled-components";
import "../../styles/custom-props.css";

const root = getComputedStyle(document.body);
const primaryBtnColor = root.getPropertyValue("--main-btn-bg");
const dangerBtnColor = root.getPropertyValue("--danger-btn-bg");

const StyledBtn = styled.button`
  color: var(--btn-font-color);
  height: ${props => (props.height !== undefined ? props.height : "3rem")};
  width: ${props => (props.width !== undefined ? props.width : "100%")};
  background: ${props => (props.danger ? dangerBtnColor : primaryBtnColor)};
  border-color: var(--main-border-color);
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
`;

const GeneralBtn = props => {
  return (
    <StyledBtn
      height={props.height}
      width={props.width}
      onClick = {props.onClick}
    >
    {props.children}
    </StyledBtn>
  );
};

GeneralBtn.defaultProps = {
    actionHandler: function() {},
    children: 'Text'
}
export default GeneralBtn;
