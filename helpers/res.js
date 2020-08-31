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

const customResponse = (res, code, msg, data) => {
  return res.status(code).json({
    code: code,
    message: msg,
    data: data
  })
}

module.exports = {
  success,
  customResponse
}