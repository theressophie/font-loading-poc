const test = require('tape');
const qck = require('../');

test('qck exists and is a object', (assert) => {
    assert.equal(typeof qck, 'object');
    assert.end();
});
