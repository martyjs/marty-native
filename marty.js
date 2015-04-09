var Marty = require('marty-core').Marty;
var marty = new Marty('0.10.0-alpha', require('react-native'));

marty.use(require('marty-core'));
marty.use(require('marty-constants'));
marty.use(require('marty-store'));
marty.use(require('marty-action-creators'));
marty.use(require('marty-queries'));
marty.use(require('marty-state-mixin'));
marty.use(require('marty-container'));
marty.use(require('marty-http-state-source'));

module.exports = marty;