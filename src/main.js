const hoverImage = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hiddenmessage');
const changeColor = document.getElementsByTagName('img');

const showName = () => {
  hiddenMessage.classList.remove('hide');
}

const hideName = () => {
  hiddenMessage.classList.add('hide');
}

const newBorder = () => {
  changeColor.classList.add('orange');
  changeColor.removeAttribute('id');
}



hoverImage.addEventListener('mouseover', showName);

hoverImage.addEventListener('mouseleave', hideName);

changeColor.addEventListener('click', newBorder);
