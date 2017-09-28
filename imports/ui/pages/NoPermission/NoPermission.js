import React from 'react';
import { Link } from 'react-router-dom';

import './NoPermission.less';

const NoPermission = () => (
  <div className="content no-permission text-center">
    <div className="no-permission__content">
      <Link to="/sign-in" className="btn btn-link">
        <img src={'/no-permission.png'} className="img-responsive small" alt="No no" />
      </Link>
    </div>
  </div>
);

export default NoPermission;
