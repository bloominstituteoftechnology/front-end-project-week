import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";
import { SideNav } from "../components";
import "../styling/ListView.css";

const ListView = props => {
  let k = 77;
  return (
    <div>
    {/* This ternary is used to ensure that the application does not act on resources not yet loaded */}
      {props.notes ? (
        <Grid container spacing={40} style={{ overflow: "scroll" }}>
          <Grid item xs={4} sm={3}>
            <SideNav />
          </Grid>
          <div
            style={{
              marginLeft: "calc(20px + (150px + 2vw))",
              marginRight: "20px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              height: "100vh"
            }}
          >
            <React.Fragment>
              {props.notes.map(note => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    key={note._id + k}
                    style={{ height: "33%" }}
                  >
                    <Card className="mein-card">
                      <NavLink
                        to={`/notes/${note._id}`}
                        onClick={() => props.fetchNote(note._id)}
                        style={{ textDecoration: "none" }}
                      >
                        <CardHeader title={`${note.title}`} style={{textShadow: '2px 2px 4px white'}}/>
                        <CardContent>
                          <Typography
                            component="p"
                            style={{ overflow: "hidden", height: "10vh", textShadow: '2px 2px 4px white'}}
                          >
                            {note.body}
                          </Typography>
                        </CardContent>
                      </NavLink>
                    </Card>
                  </Grid>
                );
              })}
            </React.Fragment>
          </div>
        </Grid>
      ) : (
        <Card className="mein-card">
          <CardContent>
            <Typography
              component="p"
              style={{ overflow: "hidden", height: "10vh", textShadow: '2px 2px 4px white'}}
            >
              This page is currently loading.
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ListView;
