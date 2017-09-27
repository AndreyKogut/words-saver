import R from 'ramda';

const handleError = (onSuccess = R.T, onError = R.T) => (error) => {
  if (error) {
    onError();
  } else {
    onSuccess();
  }
};

export {
  handleError,
};
