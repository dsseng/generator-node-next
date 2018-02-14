'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-node-next:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({});
  });

  it('creates files', () => {
    assert.file([
      'package.json',
      '.eslintrc',
      '.eslintignore',
      '.gitignore',
      'README.md',
      '.babelrc',
      '.editorconfig',
      '.travis.yml',
      'src/index.js',
      'src/sum.js',
      '__tests__/sum.spec.js',
      'Dockerfile'
    ]);
  });
});
