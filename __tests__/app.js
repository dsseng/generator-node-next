'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const generatorPath = path.join(__dirname, '../generators/app');

describe('generator-node-next:app', () => {
  it('creates files', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({})
      .then(function() {
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
});
