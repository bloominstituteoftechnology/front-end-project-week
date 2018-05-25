import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { CSVLink, CSVDownload } from "react-csv";
import { fetchingItems } from "../../actions/index";
import ListView from "../ListView/ListView";
import NoteView from "../NoteView/NoteView";
import Form_ from "../Form_/Form_";
import Button_ from "../Button_/Button_";

class Main_ extends Component {
  componentDidMount() {
    this.props.fetchingItems();
  }
  render() {
    const { notes, fetched_Item, updating } = this.props;
    console.log(fetched_Item);
    const PageUpdating = (
      <div>
        <br />
        <h5>Just a second,</h5>
        <br />
        <p>We are loading your notes...</p>
        <br />
        <Link to="/">
          <Button_ text="View my notes" />
        </Link>
      </div>
    );
    const Page404 = (
      <div>
        <br />
        <h5>Something went wrong,</h5>
        <br />
        <p>the page you are looking for is no here...</p>
        <br />
        <Link to="/">
          <Button_ text="View my notes" />
        </Link>
      </div>
    );

    if (!fetched_Item) return <div>{PageUpdating}</div>;
    return (
      <div className="col-9 position-relative custom-main">
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <h5 className="text-capitalize">Your Notes:</h5>
                <br />
                <CSVLink data={notes}>Download notes</CSVLink>
              </div>
            )}
          />
          <Route path="/note/:id" component={() => null} />
          <Route
            path="/edit/:id"
            component={() => <h5 className="text-capitalize">Edit Note:</h5>}
          />
          <Route
            path="/new"
            component={() => (
              <h5 className="text-capitalize">Create new note</h5>
            )}
          />
          <Route component={() => <h1 className="text-capitalize">Oops!</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route
            path="/note/:index"
            render={props => (!updating ? <NoteView /> : PageUpdating)}
          />
          <Route
            path="/edit/:index"
            render={props => <Form_ {...props} type="editNote" />}
          />
          <Route
            path="/new"
            render={props => <Form_ {...props} type="newNote" />}
          />
          <Route component={() => Page404} />
        </Switch>
      </div>
    );
  }
}

Main_.propTypes = {
  fetched_Item: PropTypes.bool.isRequired,
  updating: PropTypes.bool.isRequired,
  notes: PropTypes.array.isRequired,
  fetchingItems: PropTypes.func.isRequired,
  PageUpdating: PropTypes.node,
  Page404: PropTypes.node
};

const mapStateToProps = state => {
  return {
    fetched_Item: state.fetched_Item,
    updating: state.updating_Item,
    notes: state.data
  };
};
export default withRouter(connect(mapStateToProps, { fetchingItems })(Main_));
