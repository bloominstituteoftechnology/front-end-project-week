import React, { Component } from "react";

import Note from "./Note";

class NotesList extends Component {
  constructor() {
    super();
    this.state = [
      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },

      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },

      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },

      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },
      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },
      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },
      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },
      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      },
      {
        title: "Note Title",
        text:
          "Pecorino port-salut cheddar. Halloumi camembert de normandie caerphilly everyone loves the big cheese melted cheese queso port-salut. Red leicester cheese and wine blue castello gouda smelly cheese cheesy grin blue castello stinking bishop. Port-salut cheese and wine feta manchego mozzarella everyone loves hard cheese everyone loves. Halloumi."
      }
    ];
  }

  render() {
    return (
      <div className="notes">
        {this.state.map((notes, index) => {
          return <Note key={index} notes={notes} />;
        })}
      </div>
    );
  }
}

export default NotesList;
