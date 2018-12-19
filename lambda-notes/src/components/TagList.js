import React, { Component } from "react";

export default class TagList extends Component {
  render() {
    return (
      <section className="tag-wrapper">
        {this.props.tags.map(tag => (
          <div
            className="tag"
            key={tag.id}
            onClick={event => this.props.filterByTag(event, tag.text)}
          >
            {tag.text}
          </div>
        ))}
      </section>
    );
  }
}
