const fs = require('fs');
const rc = require('rc');
const path = require('path');
const ensureDir = require('mkdirp');
const pkg = require('./package.json');
const fsCopyRecursive = require('ncp').ncp;
const defaultConfig = require('./config.default.json');

// Save directory of contents folder
const CONTENTS_PATH = path.resolve(__dirname, 'contents');

/**
 * Read an .apgrc file from a certain path with settings
 * @param {string} path
 * @param {Object?} config
 */
const readConfiguration = (path, config = {}) => {
    return rc(
        'apg',
        Object.assign(defaultConfig, {
            version: pkg.version,
            template: config.template
        })
    );
};

/**
 * Checks if a directory already exists
 * @param {string} targetDirectory
 * @returns {Boolean}
 */
const directoryExists = targetDirectory => {
    return !!fs.existsSync(targetDirectory);
};

/**
 * Clones a folder recursive with a promise as return value
 * @param {string} sourcePath
 * @param {string} destinationPath
 * @returns {Promise}
 */
const cloneRecursive = (sourcePath, destinationPath) => {
    return new Promise((resolve, reject) => {
        if (directoryExists(destinationPath)) {
            reject(`Target ${destinationPath} already exists`);
        } else {
            fsCopyRecursive(sourcePath, destinationPath, err => {
                err ? reject(err) : resolve();
            });
        }
    });
};

/**
 * Creates a template out of an existing Ableton project
 * @param {string} projectPath
 * @param {Object?} config          The apg ressource contents
 */
const createProjectTemplate = (projectPath, config = {}) => {
    const cleanProjectPath = path.resolve(process.cwd(), projectPath);
    const configData = JSON.stringify(config, null, 2);
    const getTargetPath = subpath => path.join(cleanProjectPath, subpath);

    // Abort if a project already exists at the selected place
    if (directoryExists(cleanProjectPath)) {
        throw new Error(`Project ${cleanProjectPath} already exists!`);
    }

    // Make folder if not already exists
    ensureDir(getTargetPath('Ableton Project Generator'));

    // Clone contents to add default scripts for managing projects
    cloneRecursive(CONTENTS_PATH, getTargetPath('Ableton Project Generator/'))
        .then(() => {
            console.log('Copied contents to %s', getTargetPath('Ableton Project Generator'));
        })
        .catch(err => {
            throw new Error(`Failed copying contents to ${cleanProjectPath}: ${err}.`);
        });
};

/**
 * Create a new project out of a previous generated template
 * @param {string} projectTemplatePath
 * @param {Object?} config
 */
const generateProjectFromTemplate = (projectTemplatePath, config = {}) => {};

exports = module.exports = {
    cloneRecursive,
    directoryExists,
    readConfiguration,
    createProjectTemplate,
    generateProjectFromTemplate
};
