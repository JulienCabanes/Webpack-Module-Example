// Lazy load CSS on init
var loadStyle = require('bundle?lazy!./style.scss');

module.exports = {
  init: function() {
    loadStyle(function(style) {
      console.log('Module Two initialized');
      document.body.innerHTML += '<div class="ModuleTwo">Module Two</div>';
    });
  }
};
