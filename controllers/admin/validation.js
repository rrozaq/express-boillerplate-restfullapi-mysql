'use strict'
const hash = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const salt = hash.genSaltSync(10);

exports.verifyLoginPassword = (param, data) => {
    let resultLogin
    const verify = hash.compareSync(param, data[0].password);
    if (verify !== true) {
        resultLogin = {
          msg: 'Password incorect',
          code: 422,
          data: null
        }
    } else {
        const userToken = {
            id: data[0].id,
            username: data[0].username
        }
        const token = jwt.sign(userToken, process.env.SECRET_KEY, { expiresIn: '8h' });
        resultLogin = {
            msg: 'Authenticate success',
            code: 200,
            data: {
                username: userToken.username,
                token: token
            },
        }
    }
    return resultLogin
}