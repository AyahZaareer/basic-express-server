'use strict';

module.exports = (req, res, next) => {
    console.log('The Request', req.method, req.path);
    next();
}