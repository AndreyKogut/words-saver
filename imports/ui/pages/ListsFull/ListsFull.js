import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import './ListsFull.less';

const Lists = ({ lists, listTitle, setListValue, onCreate, handleRemove }) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-6 pull-right">
        <form className="form" onSubmit={onCreate}>
          <div className="form-group">
            <label htmlFor="title" className="control-label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={listTitle}
              onChange={setListValue}
              className="form-control"
            />
          </div>
          <input type="submit" value="Add list" className="btn btn-primary" />
        </form>
      </div>
      <div className="col-xs-12 col-sm-6 list">
        {lists.map(({ _id, ...data }) =>
          <ListItem key={_id} {...data} _id={_id} onRemove={handleRemove(_id)} />)}
      </div>
    </div>
  </div>
);

Lists.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  onCreate: PropTypes.func.isRequired,
  listTitle: PropTypes.string.isRequired,
  setListValue: PropTypes.func.isRequired,
};

export default Lists;
