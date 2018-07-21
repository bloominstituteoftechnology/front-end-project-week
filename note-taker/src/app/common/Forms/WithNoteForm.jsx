import React from "react";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";
function withNoteForm(WrappedBtn) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        textBody: ""
      };
    }
   
    componentDidMount() {
      console.log(this.props);
      const title = this.props.title === undefined ? '' : this.props.title;
      const textBody = this.props.textBody === undefined ? '' : this.props.textBody;
      this.setState({ title: title, textBody: textBody})
    }
    componentWillReceiveProps(nextProps) {
      console.log('nextProps');
      if(nextProps.title !== this.props.title && nextProps.textBody !== this.props.textBody) {
        this.setState({ title: nextProps.title, textBody: nextProps.textBody });
      }
    }
    changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    render() {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="field is-horizontal">
            <div className="control">
              <input
                className="input is-large"
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="field">
            <textarea
              className="textarea"
              name="textBody"
              value={this.state.textBody}
              placeholder="Note Content"
              rows="10"
              onChange={this.changeHandler}
            />
          </div>
          <Link to={this.props.routeTo}>
            <WrappedBtn width="15rem" onClick = {() => {
                this.props.btnHandlers({
                  title: this.state.title,
                  textBody: this.state.textBody,
                  tags: []
                });
              }}>{this.props.btnText}</WrappedBtn>
          </Link>
        </form>
      );
    }
  };
}

export default withNoteForm;
