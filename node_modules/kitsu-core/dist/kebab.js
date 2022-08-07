'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const kebab = input => input.charAt(0).toLowerCase() + input.slice(1).replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, match => '-' + match.toLowerCase());

exports.kebab = kebab;
