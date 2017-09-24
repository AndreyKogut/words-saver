import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import WordsList from '../../ui/words';

ReactDOM.render((
  <BrowserRouter>
    <Route path="/" component={WordsList} />
  </BrowserRouter>
), document.getElementById('app'));
