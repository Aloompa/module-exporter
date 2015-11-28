const moduleExporter = require('../index');
const assert = require('assert');

describe('The Module Exporter Test Suite', () => {
    describe('When we export a module', () => {
        it('Should return it as a requirable chunk of code', () => {
            const exportedCode = moduleExporter('myFirstCode', () => {
                return 'Hello';
            });

            assert.equal(exportedCode(), 'Hello');
        });

        it('Should export globally on the window object', () => {
            global.window = {};

            moduleExporter('mySecondCode', () => {
                return 'Hello';
            });

            assert.equal(global.window.mySecondCode(), 'Hello');
        });
    });
});
