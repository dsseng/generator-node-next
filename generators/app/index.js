'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
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
        type: 'confirm',
        name: 'unit',
        message: 'Would you like to enable unit tests (Jest)?',
        default: true
      },
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
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let ins = [
      'package.json.ejs',
      '.eslintrc.ejs',
      '.eslintignore.ejs',
      '.gitignore.ejs',
      'README.md.ejs'
    ];
    let outs = ['package.json', '.eslintrc', '.eslintignore', '.gitignore', 'README.md'];
    ins.forEach((inp, i) => {
      this.fs.copyTpl(this.templatePath(inp), this.destinationPath(outs[i]), this.props);
    });

    this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
    this.fs.copy(this.templatePath('Dockerfile'), this.destinationPath('Dockerfile'));
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));

    if (this.props.unit) {
      this.fs.copy(this.templatePath('__tests__'), this.destinationPath('__tests__'));
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
