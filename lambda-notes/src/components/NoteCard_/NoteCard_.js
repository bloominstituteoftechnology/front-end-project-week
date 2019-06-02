import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import { Card, CardTitle, CardText } from 'reactstrap';

const NoteCard_ = ({ card }) => {
  // const { card } = props;
  // console.log("card",card);
  return (
    <Card className="custom-NoteCard" body>
      <CardTitle>
        {card.title.length > 16 ? card.title.substring(0, 13) : card.title}
        {card.title.length > 13 && '...'}
      </CardTitle>
      <hr className="custom-hr" />
      <CardText>
        <Markdown>{card.content.substring(0, 118)}</Markdown>
      </CardText>
    </Card>
  );
};

NoteCard_.propTypes = {
  card: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NoteCard_;
