import React from 'react';
import PropTypes from 'prop-types';

import WordsListItemEditable from './WordsListItemEditable';
import WordsListItemStatic from './WordsListItemStatic';
import SubmitModal from '../../SubmitModal';

const WordsListItem = ({ onChange, onRemove, isEditable, showEditor, hideEditor, word }) => (
  <dl className="dl-horizontal words-list__item-wrapper light-separator padding-bottom--small clearfix">
    {!isEditable
      ? <WordsListItemStatic {...word} />
      : <WordsListItemEditable {...word} onChange={onChange} />}
    <div className="words-list__controls margin-left--small">
      <SubmitModal
        title="Removing word"
        description={`Are you sure you want to remove '${word.name}' word?`}
        onSubmit={onRemove}
        iconStyles="fa fa-times text-danger"
        buttonStyles="btn btn-link"
      />
      {!isEditable
        ? (<button onClick={showEditor} className="btn btn-link">
          <i className="fa fa-edit text-info" />
        </button>)
        : (<button onClick={hideEditor} className="btn btn-link">
          <i className="fa fa-check text-success" />
        </button>)}
    </div>
  </dl>
);

WordsListItem.propTypes = {
  word: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
  showEditor: PropTypes.func.isRequired,
  hideEditor: PropTypes.func.isRequired,
};

export default WordsListItem;
