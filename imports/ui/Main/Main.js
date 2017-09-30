import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

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
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navItems">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Words</Link>
            </li>
            <li>
              <Link to="/lists">Lists</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a onClick={logout} className="btn btn-link">
                <span className="text-danger">Away</span>
              </a>
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
