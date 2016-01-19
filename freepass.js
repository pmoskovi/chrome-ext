document.addEventListener('DOMContentLoaded', function() {
  var checkMagicButton = document.getElementById('magicButton');
  checkMagicButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      window.open ('http://example.com');
    });
  }, false);
}, false);
