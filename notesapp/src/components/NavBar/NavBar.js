import React from "react";
import {
  NavBarDiv,
  NavBarHeader,
  NavLinkBtn,
  NavLinkDiv,
  NavButtonText,
  LambdaLogo
} from "../../Styles/NavBarStyles";
import {
  ModalDiv,
  ModalText,
  NoButton,
  NoButtonText,
  YesButton,
  YesButtonText
} from "../../Styles/DLAModalStyles";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { CSVLink } from "react-csv";
import Modal from "react-modal";

const NavigationBar = props => {

  return (
    <NavBarDiv>
      <NavBarHeader>Lambda Notes</NavBarHeader>
      <LambdaLogo></LambdaLogo>
      <NavLinkDiv>
        <SearchBar filterTarget={props.filterTarget} filter={props.filter} />
        <NavLinkBtn>
          <NavButtonText>
            <Link to="/home" className="a">
              {" "}
              View Your Notes
            </Link>
          </NavButtonText>
        </NavLinkBtn>
        <NavLinkBtn>
          <NavButtonText>
            <Link to="/form" className="a">
              {" "}
              + Create New Note
            </Link>
          </NavButtonText>
        </NavLinkBtn>
        <NavLinkBtn onClick={ev => props.logoutFunction(ev)}>
          <NavButtonText>Logout</NavButtonText>
        </NavLinkBtn>
        <NavLinkBtn onClick={() => props.openDLAModal()}>
          <NavButtonText>Download All</NavButtonText>
        </NavLinkBtn>
        <Modal
          isOpen={props.downloadAllModal}
          onRequestClose={props.closeDLAModal}
          style={customDLAStyles}
        >
          <ModalText>Are you sure?</ModalText>
          <ModalDiv>
            <YesButton onClick={() => props.closeDLAModal()}>
              <YesButtonText>
                <CSVLink
                  data={props.notes}
                  className="csvLink"
                  filename={"my-notes.csv"}
                >
                  {" "}
                  Yes
                </CSVLink>
              </YesButtonText>
            </YesButton>
            <NoButton onClick={() => props.closeDLAModal()}>
              <NoButtonText>No</NoButtonText>
            </NoButton>
          </ModalDiv>
        </Modal>
      </NavLinkDiv>
    </NavBarDiv>
  );
};

const customDLAStyles = {
  overlay: {
    backgroundColor: "none"
  },
  content: {
    position: "absolute",
    top: "400px",
    left: "31px",
    right: "1589px",
    bottom: "52%",
    border: "1px solid #b7b7b7",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "none",
    outline: "none",
    padding: "0px"
  }
};

export default NavigationBar;
