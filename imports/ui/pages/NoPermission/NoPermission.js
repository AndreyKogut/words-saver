import React from 'react';

import './NoPermission.less';

const NoPermission = () => (
  <div className="content no-permission text-center">
    <div className="no-permission__content">
      <a href="/sign-in" className="btn btn-link">
        <img src="/no-permission.png" className="img-responsive small" alt="No no" />
      </a>
    </div>
  </div>
);

export default NoPermission;
