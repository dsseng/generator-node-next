'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the prime ' + chalk.red('generator-node-next') + ' generator!')
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
        message: 'Name:',
        default: 'my-awesome-app'
      },
      {
        type: 'input',
        name: 'descr',
        message: 'Description:',
        default: 'Hello, World!'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author (your name or nickname):',
        default: 'Jonh Doe'
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
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));

    if (this.props.unit) {
      this.fs.copy(this.templatePath('__tests__'), this.destinationPath('__tests__'));
    }
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
