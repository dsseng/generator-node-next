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
          'Dockerfile',
          '.dockerignore'
        ]);
      });
  });

  it('creates .travis.yml only if Travis CI is enabled', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({ travis: false })
      .then(function() {
        assert.noFile(['.travis.yml']);
      });
  });

  it('creates Dockerfile and .dockerignore only if Docker deployment is enabled', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({ docker: false })
      .then(function() {
        assert.noFile(['Dockerfile', '.dockerignore']);
      });
  });
});
