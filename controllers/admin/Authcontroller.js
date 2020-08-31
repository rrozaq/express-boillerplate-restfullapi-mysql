'use strict'

const connection = require('../../config/connection')
const response = require('../../helpers/res');
const { verifyLoginPassword } = require('./validation')

exports.login = (req, res) => {
    let post = {
        username: req.body.username,
        password: req.body.password
    };
    connection.query("SELECT * FROM admin WHERE username = ?", [post.username], function(error, result){
        if(error) {
            console.log(error);
        } else {
            if(result.length > 0) {
                const verify = verifyLoginPassword(post.password, result)
                response.customResponse(res, verify.code, verify.msg, verify.data)
            } else {
                response.customResponse(res, 401, 'Username or password not match', null);
            }
        }
    });
}

