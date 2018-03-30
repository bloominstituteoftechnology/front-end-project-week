import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';

const defaultNotes = {
  'notes': [
    {
      id: 0,
      title: 'Lorem',
      content: 'Lorem ipsum dolor sit amet, vel diam debet neglegentur ea. Putant discere interpretaris ad has. Ne salutatus consulatu est.',
    },
    {
      id: 1,
      title: 'Ipsum',
      content: 'Et vel ipsum sanctus voluptua, pri eu choro nusquam. Ea quis paulo gubergren eam.',
    },    
    {
      id: 2,
      title: 'Dolor',
      content: 'Ut sit ipsum pertinacia suscipiantur, unum facilis moderatius qui ad. Te has quaeque nostrum fierent, augue repudiare constituto eum at.',
    },
    {
      id: 3,
      title: 'Sit Amet',
      content: 'Tibique reprimique et his, saperet verterem ex mei, feugiat vocibus efficiantur ne eam. No malis graeci fierent est.',
    },
    {
      id: 4,
      title: 'Vel Diam Debet',
      content: 'Ut sit ipsum pertinacia suscipiantur, unum facilis moderatius qui ad. Te has quaeque nostrum fierent, augue repudiare constituto eum at.',
    },
    {
      id: 5,
      title: 'Putant Discere',
      content: 'Lorem ipsum dolor sit amet, vel diam debet neglegentur ea. Putant discere interpretaris ad has. Ne salutatus consulatu est.',
    },
    {
      id: 6,
      title: 'Interpretaris Ad Has',
      content: 'Ea eam tollit vidisse oportere, rebum scripserit nam ne. Et tation meliore accusam qui, mazim feugiat ad est.',
    },
    {
      id: 7,
      title: 'Sea Mnim Legere',
      content: 'Et vel ipsum sanctus voluptua, pri eu choro nusquam. Ea quis paulo gubergren eam.',
    },
    {
      id: 8,
      title: 'Duo No Illum',
      content: 'Lorem ipsum dolor sit amet, vel diam debet neglegentur ea. Putant discere interpretaris ad has. Ne salutatus consulatu est.',
    },
  ]
};

export const store = createStore(rootReducer, defaultNotes);

render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
