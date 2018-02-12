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
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      },
      {
        type: 'input',
        name: 'someText',
        message: 'Text:',
        default: 'Hello, World!'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt'),
      { title: this.props.someText, yesNo: this.props.someAnswer }
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
