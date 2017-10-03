import R from 'ramda';
import React from 'react';

import FullListTraining from '../../components/FullListTraining';

const ListWordsTrainingNativeForeign = (props) => (
  <div className="container">
    <FullListTraining
      listId={R.pathOr('', ['match', 'params', 'id'], props)}
      hiddenProp="translation"
      visibleProp="name"
    />
  </div>
);

export default ListWordsTrainingNativeForeign;
