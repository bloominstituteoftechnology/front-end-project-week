import React from 'react';
import { Card } from '../AtomComps/Card';

export const List = props => {
  return (
    <div className="List">
      {props.cards.map((card, index) => {
        return (
          <div>
            <Card
              key={card + index}
              title={card.title}
              content={card.content}
            />
          </div>
        );
      })}
    </div>
  );
};
