import React from 'react';
import { Switch, Route } from 'react-router';

import routes, { listeners } from './routes';

const App = () => {
  const getRoutes =
    (routesList) => routesList.map(({ name, ...props }) => <Route key={name} {...props} />);

  return (
    <div>
      {getRoutes(listeners)}
      <Switch>
        {getRoutes(routes)}
      </Switch>
    </div>
  );
};

export default App;
