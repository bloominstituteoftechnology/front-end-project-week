import React, { Component } from "react";
import PropTypes from "prop-types";

class Tags extends Component {
  render() {
    return (
      <section className="tags-container">
        {this.props.tags
          ? this.props.tags.split(" ").map(tag => {
              return <p className="tag">{tag}</p>;
            })
          : null}
      </section>
    );
  }
}

export default Tags;
