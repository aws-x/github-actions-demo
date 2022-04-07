const unirest = require('unirest');
const { describe, test, expect } = require('@jest/globals');

describe('test lambda function', () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/2';
    const promise = unirest.get(url);

    test('toBeInstanceOf Object', async () => {
        const Request = await promise;
        const { body } = Request;
        expect(body).toBeInstanceOf(Object);
    });

    test('toMatchObject response', async () => {
        const Request = await promise;
        const { body } = Request;
        const expected = { completed: false };
        expect(body).toMatchObject(expected);
    });
});

