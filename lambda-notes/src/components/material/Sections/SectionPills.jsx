import React from "react";
import { Route } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../../Grid/GridContainer.jsx";
import GridItem from "../../Grid/GridItem";
import NavPills from "../../NavPills/NavPills";
import pillsStyle from "../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import ViewNotes from "../../MainPage/ViewNotes.js";
import NewNote from "../../Routes/NewNote.js";
import NoteViewer from "../../Routes/NoteViewer";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="info"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Your Notes",
                      tabIcon: Dashboard,
                      tabContent: <ViewNotes />,
                    },
                    {
                      tabButton: "Create Note",
                      tabIcon: Schedule,
                      tabContent: <NewNote/>
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
