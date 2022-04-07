const unirest = require('unirest');
const { describe, test, expect } = require('@jest/globals');

describe('Test order with multiple items', () => {
    require('dotenv').config();
    const url = `${process.env.AWS_ENDPOINT}/todos/2`;
    const promise = unirest.get(url);

    test('toBeInstanceOf Object', async () => {
        const Request = await promise;
        const { body } = Request;
        expect(body).toBeInstanceOf(Object);
    });

    test('toMatchObject response', async () => {
        console.log('process.env.AWS_ENDPOINT', process.env.AWS_ENDPOINT);
        const Request = await promise;
        const { body } = Request;
        const expected = { completed: false };
        expect(body).toMatchObject(expected);
    });
});

