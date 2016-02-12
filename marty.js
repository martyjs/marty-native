var Marty = require('marty-lib/modules/core/marty');
var marty = new Marty('0.10.0-beta', react());

marty.use(require('marty-lib/modules/core/index'));
marty.use(require('marty-lib/modules/constants/index'));
marty.use(require('marty-lib/modules/application/index'));
marty.use(require('marty-lib/modules/store/index'));
marty.use(require('marty-lib/modules/action-creators/index'));
marty.use(require('marty-lib/modules/queries/index'));
marty.use(require('marty-lib/modules/state-mixin/index'));
marty.use(require('marty-lib/modules/app-mixin/index'));
marty.use(require('marty-lib/modules/container/index'));
marty.use(require('marty-lib/modules/http-state-source/index'));

module.exports = marty;

function react() {
  try {
    return module.parent.require('react');
  } catch (e) {
    return require('react');
  }
}
