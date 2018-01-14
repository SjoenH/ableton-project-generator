const test = require('ava').test;
const { read } = require('./index');

const templateTestConfig = {
    template: '/path/to/test/project/template'
};

test('it should read the example configuration successfully', t => {
    const config = read(templateTestConfig);

    t.is(config.name, 'Default Template', 'Returns the correct configuration name');
    t.is(config.template, '', 'Returns the correct template path');
    t.is(config.version, '0.0.0', 'Returns the correct version');
});
