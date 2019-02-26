import React from 'react';
import {Link} from 'react-router-dom';


const NotFoundPage = () => (
  <div>
    <h1>404</h1><Link to="/">*Go Home*</Link>
  </div>
);

export default NotFoundPage;