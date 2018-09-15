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

  it('creates .babelrc with valid content if babel-minify is enabled', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({ minify: true })
      .then(function() {
        assert.fileContent('.babelrc', /"minify"/);
      });
  });
  it('creates .babelrc with valid content if babel-minify is disabled', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({ minify: false })
      .then(function() {
        assert.noFileContent('.babelrc', /"minify"/);
      });
  });

  it('creates valid dependencies and scripts in package.json if unit testing is enabled', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({ unit: true })
      .then(function() {
        assert.fileContent('package.json', /"test:unit": "jest"/);
        assert.fileContent('package.json', /yarn run test:unit/);
        assert.fileContent('package.json', /"babel-jest"/);
        assert.fileContent('package.json', /"jest"/);
        assert.fileContent('package.json', /"eslint-plugin-jest"/);
      });
  });
  it('creates package.json with valid name, description and author', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({
        name: 'test',
        descr: 'lorem ipsum dolor sit amet',
        author: 'Jonh Doe'
      })
      .then(function() {
        assert.fileContent('package.json', /"name": "test"/);
        assert.fileContent('package.json', /"description": "lorem ipsum dolor sit amet"/);
        assert.fileContent('package.json', /"author": "Jonh Doe"/);
      });
  });

  it('creates README.md with valid name, description, author and badges', () => {
    return helpers
      .run(generatorPath)
      .withPrompts({
        name: 'test',
        descr: 'lorem ipsum dolor sit amet',
        author: 'doe'
      })
      .then(function() {
        assert.fileContent('README.md', /# test/, /<%= lorem ipsum dolor sit amet %>/);

        assert.fileContent('README.md', /badge.fury.io\/js\/test.svg/);
        assert.fileContent('README.md', /npmjs.org\/package\/test/);
        assert.fileContent(
          'README.md',
          /https:\/\/travis-ci.org\/doe\/test.svg\?branch=master/
        );
        assert.fileContent('README.md', /https:\/\/travis-ci.org\/doe\/test/);
        assert.fileContent(
          'README.md',
          /https:\/\/david-dm.org\/doe\/test.svg\?theme=shields.io/
        );
        assert.fileContent('README.md', /https:\/\/david-dm.org\/doe\/test/);
        assert.fileContent(
          'README.md',
          /https:\/\/coveralls.io\/repos\/doe\/test\/badge.svg/
        );
        assert.fileContent('README.md', /https:\/\/coveralls.io\/r\/doe\/test/);
      });
  });
});
