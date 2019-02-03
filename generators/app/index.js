'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the prime ' +
          chalk.red('generator-node-next') +
          ' generator! Answer some questions and your ' +
          chalk.green('awesome') +
          ' app will be created!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name of your app:',
        default: 'my-awesome-app'
      },
      {
        type: 'input',
        name: 'descr',
        message: 'Description of your app:',
        default: 'Hello, World!'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author (your nickname on github):',
        default: 'sh7dm'
      },
      {
        type: 'list',
        name: 'packageManager',
        message: 'Package manager to install dependencies with:',
        default: 'yarn',
        choices: ['yarn', 'npm']
      },
      {
        type: 'confirm',
        name: 'unit',
        message: 'Would you like to enable unit tests?',
        default: true
      },
      {
        type: 'confirm',
        name: 'docker',
        message: 'Would you like to enable Docker deployment?',
        default: true
      },
      {
        type: 'confirm',
        name: 'travis',
        message: 'Would you like to enable Travis CI?',
        default: true
      },
      {
        type: 'confirm',
        name: 'minify',
        message: 'Would you like to enable code minification?',
        default: true
      }
    ];

    let props = await this.prompt(prompts);

    if (props.unit) {
      props.runner = (await this.prompt([
        {
          type: 'list',
          name: 'runner',
          message: 'Test runner to use:',
          choices: ['jest', 'ava']
        }
      ])).runner;
    }

    this.props = props;
  }

  writing() {
    let ins = [
      'package.json.ejs',
      '.eslintrc.ejs',
      '.eslintignore.ejs',
      '.gitignore.ejs',
      'README.md.ejs',
      '.babelrc.ejs'
    ];
    let outs = [
      'package.json',
      '.eslintrc',
      '.eslintignore',
      '.gitignore',
      'README.md',
      '.babelrc'
    ];
    ins.forEach((inp, i) => {
      this.fs.copyTpl(this.templatePath(inp), this.destinationPath(outs[i]), this.props);
    });

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));

    if (this.props.unit && this.props.runner === 'jest') {
      this.fs.copy(this.templatePath('__tests__'), this.destinationPath('__tests__'));
    } else if (this.props.unit && this.props.runner === 'ava') {
      this.fs.copy(this.templatePath('test'), this.destinationPath('test'));
    }

    if (this.props.docker) {
      this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
      this.fs.copy(
        this.templatePath('.dockerignore'),
        this.destinationPath('.dockerignore')
      );
    }

    if (this.props.travis) {
      this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
    }
  }

  install() {
    if (this.props.packageManager === 'yarn') {
      this.installDependencies({
        npm: false,
        bower: false,
        yarn: true
      }); // Use yarn
    } else {
      this.installDependencies({
        npm: true,
        bower: false,
        yarn: false
      }); // Use npm
    }
  }
};
