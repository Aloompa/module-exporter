/*global define, window */

'use strict';

module.exports = (name, code) => {

    // Old-School global
    window[name] = code;

    // AMD or CommonJS
    if (
        typeof define === 'function' && define.amd ||
        typeof module === 'object'
    ) {
        return code;
    }

};
