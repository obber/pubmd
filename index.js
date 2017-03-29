require('babel-register');
require('babel-polyfill');

const path = require('path');
const express = require('express');
const commandLineArgs = require('command-line-args')

const init = require('./lib/server');

const optionDefinitions = [
  { name: 'directory', alias: 'd', type: String },
  { name: 'port', alias: 'p', type: Number }
];

const {
  port,
  directory
} = commandLineArgs(optionDefinitions);

init(port, path.resolve(__dirname, directory));