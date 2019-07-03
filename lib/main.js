'use strict';

var hoverImage = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hiddenmessage');
var changeColor = document.getElementsByTagName('img');

var showName = function showName() {
  hiddenMessage.classList.remove('hide');
};

var hideName = function hideName() {
  hiddenMessage.classList.add('hide');
};

var newBorder = function newBorder() {
  changeColor.classList.add('orange');
  changeColor.removeAttribute('id');
};

hoverImage.addEventListener('mouseover', showName);

hoverImage.addEventListener('mouseleave', hideName);

changeColor.addEventListener('click', newBorder);