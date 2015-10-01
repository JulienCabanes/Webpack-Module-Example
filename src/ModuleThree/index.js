var style = require('./style.scss');

module.exports = {
  init: function() {
    console.log('Module Three initialized');
    document.body.innerHTML += '<div class="ModuleThree">Module Three</div>';
  }
};
