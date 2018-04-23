import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default () => {
  const tempCard = [
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    {
      title: "Note Title",
      content: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ..."
    },
    
  ]
  return (
    <div className="PrimaryContainer">
      <h1 className="PrimaryContainer__header">Your Notes:</h1>
      <div className="PrimaryContainer__cardContainer">
        {tempCard.map((note, index) => (
          <Card key={index} className="col-4 NoteCard">
            <CardTitle>{note.title}</CardTitle>
            <CardBody>{note.content}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}