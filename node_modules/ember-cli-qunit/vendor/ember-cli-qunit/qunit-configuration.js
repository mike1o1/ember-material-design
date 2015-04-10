/* globals jQuery,QUnit */

QUnit.config.autostart = false;
QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });
QUnit.config.urlConfig.push({ id: 'nojshint', label: 'Disable JSHint'});

if (QUnit.notifications) {
  QUnit.notifications({
    icons: {
      passed: '/assets/passed.png',
      failed: '/assets/failed.png'
    }
  });
}

jQuery(document).ready(function() {
  var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
  document.getElementById('ember-testing-container').style.visibility = containerVisibility;
});
