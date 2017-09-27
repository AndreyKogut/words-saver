import React from 'react';
import { Route } from 'react-router-dom';

import routes from './routes';

const App = () => (
  <div>
    {routes.map(({ name, ...props }) => <Route key={name} {...props} />)}
  </div>
);

export default App;
