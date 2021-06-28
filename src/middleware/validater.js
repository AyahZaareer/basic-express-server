'use strict';

module.exports = (req, res, next) => {
	let query = req.query.name;
	if (query) {
		next();
	} else {
		next('query/name not valid');
	}

};
