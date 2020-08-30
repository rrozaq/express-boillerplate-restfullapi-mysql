'use strict';

const success = function(values, res, msg) {
  var data = {
    'code': 200,
    'message': msg,
    'status': 'success',
    'data': values,
  };
  res.status(200).json(data);
  res.end();
};


module.exports = {
  success,
}