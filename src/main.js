const hoverImage = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hiddenmessage');

const showName = () => {
  hiddenMessage.classList.remove('hide');
}

hoverImage.addEventListener('mouseover', showName);
