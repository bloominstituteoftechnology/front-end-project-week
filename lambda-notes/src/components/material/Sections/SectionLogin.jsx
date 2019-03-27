import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardBody from "../../Card/CardBody";
import CardFooter from "../../Card/CardFooter";
import Button from "../../CustomButtons/Button.jsx";
import CustomInput from "../../CustomInput/CustomInput.jsx";

import loginStyle from "../../../assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";


class SectionLogin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                      Edit
                        <i
                          className={classes.socialIcons + " fab fa-twitter"}
                        />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                      Delete
                        <i
                          className={classes.socialIcons + " fab fa-facebook"}
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      View Notes
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLogin);
