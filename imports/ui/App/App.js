import React from 'react';
import { Switch, Route } from 'react-router';

import routes from './routes';

const App = () => (
  <div>
    <Switch>
      {routes.map(({ name, ...props }) => <Route key={name} {...props} />)}
    </Switch>
  </div>
);

export default App;
