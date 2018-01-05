const del = require('del');
const path = require('path');
const test = require('ava').test;
const {
    cloneRecursive,
    directoryExists,
    readConfiguration,
    createProjectTemplate,
    generateProjectFromTemplate
} = require('../index');

const testProject = path.resolve(__dirname, 'Test Project');
const testCloneProject = path.resolve(__dirname, 'Test Project (Cloned)');

test.after.always(async t => {
    await del([testCloneProject])
        .then(paths => {
            console.log('Cleaned paths %s', paths.join(', '));
            t.pass();
        })
        .catch(t.fail);
});

test('it should test if a directory exists', t => {
    t.true(directoryExists(testProject));
});

test.cb('it should copy a project into a new folder recursively', t => {
    cloneRecursive(testProject, testCloneProject)
        .then(() => {
            if (directoryExists(testCloneProject)) {
                t.pass();
                t.end();
            } else {
                t.fail('Directory does not exist!');
                t.end();
            }
        })
        .catch(err => {
            t.fail(err);
            t.end();
        });
});

test('it should create a template out of a project', t => {
    cloneRecursive(testProject, testCloneProject).then(() => {
        createProjectTemplate(testCloneProject);
    });
});
