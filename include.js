'use strict';

function requireAll(r) { r.keys().forEach(r); }

requireAll(require.context('./develop', true, /\.(js)$/));
requireAll(require.context('./develop', true, /\.(css)$/));