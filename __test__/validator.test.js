'use strict';

const validator = require('../src/middleware/validater');
xdescribe('validator test', () => {
    it('when there are query name', () => {
        let req = {
            query: {
                name: 'Ayah',
            },
        };
        let res = {};
        let next = jest.fn();
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith();
    });
    it('handeling no query', () => {
        let req = {
            query: {
                name: '',
            },
        };
        let res = {};
        let next = jest.fn();
        validator(req, res, next);
        expect(next).toHaveBeenCalledWith('query/name not valid');
    });
});