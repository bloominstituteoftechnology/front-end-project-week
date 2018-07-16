import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const NoteCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          {/* <CardTitle>Note Title</CardTitle>
          <CardText>
            Duis laboris anim ullamco sit. Minim magna aute ea voluptate duis
            aliqua magna aliquip enim et labore id proident fugiat. Laboris enim
            magna non eiusmod pariatur mollit sunt excepteur. Sunt ea
            consectetur fugiat reprehenderit laborum et commodo exercitation
            aliquip amet nisi incididunt. Voluptate et id non incididunt.
          </CardText> */}
          <CardTitle>{props.note.title}</CardTitle>
          <CardText>{props.note.content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default NoteCard;
