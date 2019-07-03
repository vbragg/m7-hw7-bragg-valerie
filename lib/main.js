'use strict';

var hoverImage = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hiddenmessage');

var showName = function showName() {
  hiddenMessage.classList.remove('hide');
};

hoverImage.addEventListener('mouseover', showName);