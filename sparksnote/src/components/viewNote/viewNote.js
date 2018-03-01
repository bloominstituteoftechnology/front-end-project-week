import React, { Component } from "react";

class ViewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [{
        title: "Note One", note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id ﬁnibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta eﬃcitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis.Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, eﬃcitur mollis velit. Ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit.Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellentesque vel.Aenean quis enim placerat, posuere orci ac, condimentum tellus.Vivamus vitae sodales quam, eget ultricies lorem. Nam pellentesque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam.Duis eget metus elementum, sollicitudin dui sed, accumsan dui.Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat.Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl" }]
    }
  }

  render() {
    return (
      <div className="viewNote">
        <div className="viewNote__options">
          <p className="viewNote__options__text">Edit</p>
          <p className="viewNote__options__text">Delete</p>
        </div>

        <div className="viewNote__header">
          <p className="viewNote__header__text">{this.state.notes[0].title}</p>
        </div>

        <div className="viewNote__content">
          <p className="viewNote__content__text">{this.state.notes[0].note}</p>
        </div>
      </div>
      )
  }
}

export default ViewNote;