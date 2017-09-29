import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

import routes from './routes';

const logout = function onLogout() {
  Meteor.logout(() => this.location.replace('/rejected'));
};

const Main = () => {
  const getRoutes =
    (routesList) => routesList.map(({ name, ...props }) => <Route key={name} {...props} />);

  return (
    <div>
      <div className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" data-target="#navItems" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navItems">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/words">Words</NavLink>
            </li>
            <li>
              <NavLink to="/word">Words</NavLink>
            </li>
            <li>
              <NavLink to="/wor">Words</NavLink>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a onClick={logout} className="btn btn-link">Away</a>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        {getRoutes(routes)}
      </Switch>
    </div>
  );
};

export default Main;
