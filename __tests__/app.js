'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-next:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true, someText: 'Hi!' });
  });

  it('creates files with correct content', () => {
    assert.file(['dummyfile.txt']);
    assert.fileContent('dummyfile.txt', 'Hi!\r\nYes\r\n');
  });
});
