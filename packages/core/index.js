const fs = require('fs');
const path = require('path');
const config = require('@ableton-project-generator/config');
const pkg = require('./package.json');

/**
 * Creates a template out of an existing Ableton project
 * @param {string} templatePath
 * @param {Object?} config          The apg ressource contents
 */
const createTemplate = (templatePath, config = {}) => {};

/**
 * Create a new project out of a previous generated template
 * @param {string} projectTemplateOrName
 * @param {Object?} config
 */
const generateProject = (projectTemplateOrName, config = {}) => {};

exports = module.exports = {
    createTemplate,
    generateProject
};
