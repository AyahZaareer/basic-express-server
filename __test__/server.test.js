'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const requestServer = supertest(server.serverApp);

describe('server', () => {

    it('should get 200 status ', async () => {
        let rout = '/';

        const response = await requestServer.get(rout);

        expect(response.status).toBe(200);
        expect(response.text).toEqual('Hello from server');

    });
    it('should get 500 status ', async () => {
        let rout = '/person?name=';

        const response = await requestServer.get(rout);

        expect(response.status).toBe(500);

    });
    it('should get 200 status ', async () => {
        let rout = '/person?name=Ayah';

        const response = await requestServer.get(rout);
        let obj = JSON.parse(response.text);
        // console.log('obj', obj);

        expect(response.status).toBe(200);
        expect(obj).toEqual({ name: 'Ayah' });

    });

})