import React from 'react';
import PropTypes from 'prop-types';

const FullListTrainingItem = ({ visible, hidden, showHidden, hideHidden, isVisible }) => (
  <dl className="dl-horizontal words-list__item-wrapper padding-bottom--small clearfix">
    <div className="words-list__item">
      <dt><span className="words-list__word">{visible}</span></dt>
      <dd>{ isVisible ? hidden : (
        <i className="fa fa-leanpub" />
      )}</dd>
    </div>
    <div className="words-list__controls margin-left--small">
      {!isVisible
        ? (<button onClick={showHidden} className="btn btn-link">
          <i className="fa fa-eye text-info" />
        </button>)
        : (<button onClick={hideHidden} className="btn btn-link">
          <i className="fa fa-eye-slash text-success" />
        </button>)}
    </div>
  </dl>
);

FullListTrainingItem.propTypes = {
  visible: PropTypes.string.isRequired,
  hidden: PropTypes.string.isRequired,
  showHidden: PropTypes.func.isRequired,
  hideHidden: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default FullListTrainingItem;
