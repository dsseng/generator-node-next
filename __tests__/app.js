'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const fs = require('fs');
const helpers = require('yeoman-test');

describe('generator-node-next:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true, someText: 'Hi!' });
  });

  it('creates files with correct content', () => {
    assert.file(['dummyfile.txt']);
    assert.equal(
      fs.readFileSync('dummyfile.txt', 'utf-8').includes('Hi!') &&
        fs.readFileSync('dummyfile.txt', 'utf-8').includes('Yes'),
      true
    );
  });
});
