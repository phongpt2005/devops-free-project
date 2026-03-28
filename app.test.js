const request = require('supertest');
const app = require('./app');

describe('Test API Endpoints', () => {

    test('GET /health trả về 200', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('healthy');
    });

    test('GET / trả về message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBeDefined();
    });

});