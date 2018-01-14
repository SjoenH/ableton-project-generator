const fs = require('fs');

/**
 * Checks if a directory already exists
 * @param {string} targetDirectory
 * @returns {Boolean}
 */
const directoryExists = targetDirectory => {
    return !!fs.existsSync(targetDirectory);
};

exports = module.exports = directoryExists;
