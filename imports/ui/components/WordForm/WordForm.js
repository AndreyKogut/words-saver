import React from 'react';

const WordForm = () => (
  <form className="form">
    <div className="form-group">
      <label htmlFor="name" className="control-label">
        Name:
      </label>
      <input type="text" id="name" className="form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="translation" className="control-label">
        Translation:
      </label>
      <input type="text" id="translation" className="form-control" />
    </div>
    <div className="form-group">
      <input type="submit" value="Add word" className="btn btn-primary" />
    </div>
  </form>
);

export default WordForm;
