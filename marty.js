var Marty = require('marty-lib/modules/core/marty');
var marty = new Marty('0.10.0-beta', react());

marty.use(require('marty-lib/modules/core/index'));
marty.use(require('marty-lib/modules/constants/index'));
marty.use(require('marty-lib/modules/application/index'));
marty.use(require('marty-lib/modules/store/index'));
marty.use(require('marty-lib/modules/action-creators/index'));
marty.use(require('marty-lib/modules/queries/index'));
marty.use(require('marty-lib/modules/state-mixin/index'));
marty.use(require('marty-lib/modules/container/index'));

module.exports = marty;

// Due to [NPM peer dependency issues](https://github.com/npm/npm/issues/5875)
// we need to try resolving react from the parent if its not present locally
function react() {
  try {
    return require('react-native');
  } catch (e) {
    return module.parent.require('react-native');
  }
}
