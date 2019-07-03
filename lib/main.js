'use strict';

var hoverImage = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hiddenmessage');

var showName = function showName() {
  hiddenMessage.classList.remove('hide');
};

var hideName = function hideName() {
  hiddenMessage.classList.add('hide');
};

var newBorder = function newBorder() {
  hoverImage.classList.add('orange');
  hoverImage.removeAttribute('id');
};

hoverImage.addEventListener('mouseover', showName);

hoverImage.addEventListener('mouseleave', hideName);

hoverImage.addEventListener('click', newBorder);