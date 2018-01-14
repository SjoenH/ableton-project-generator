const fsCopyRecursive = require('ncp').ncp;
const directoryExists = require('./directoryExists');

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

exports = module.exports = cloneRecursive;
