const rc = require('rc');
const pkg = require('./package.json');

/**
 * Read an .apgrc file from a certain path with settings
 * @param {Object?} config      Configuration object with settings
 * @returns {Object}            APG configuration object
 */
const readConfiguration = (config = {}) => {
    return rc(
        'apg',
        Object.assign(
            {
                name: 'default',
                template: '',
                version: ''
            },
            {
                version: pkg.version,
                template: config.template
            }
        )
    );
};

exports = module.exports = {
    read: readConfiguration
};
