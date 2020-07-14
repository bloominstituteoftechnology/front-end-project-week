import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "../../material-kit-react";

const navPillsStyle = theme => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "visible !important"
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }
  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflowX: "visible"
  },
  horizontalDisplay: {
    display: "block"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    margin: "0 5px"
  },
  pillsWithIcons: {
    borderRadius: "4px"
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "15px 0"
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  labelContainer: {
    padding: "0!important",
    color: "inherit"
  },
  label: {
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit"
  },
  contentWrapper: {
    marginTop: "20px"
  },
  primary: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: primaryColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  info: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: infoColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
    }
  },
  success: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: successColor,
      boxShadow:
        "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
    }
  },
  warning: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: warningColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  danger: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: dangerColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
    }
  },
  rose: {
    "&,&:hover": {
      color: "#FFFFFF",
      backgroundColor: roseColor,
      boxShadow:
        "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
    }
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default navPillsStyle;
