/*global define, window */

'use strict';

module.exports = (name, code) => {

    // Old-School global
    if (typeof window !== 'undefined') {
        window[name] = code;
    }

    // AMD or CommonJS
    if (
        typeof define === 'function' && define.amd ||
        typeof module === 'object'
    ) {
        return code;
    }

};
