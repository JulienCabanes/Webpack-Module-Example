var style = require('./style.scss');

module.exports = {
  init: function() {
    console.log('Module One initialized');
    document.body.innerHTML += '<div class="ModuleOne">Module One</div>';
  }
};
