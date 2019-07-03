const hoverImage = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hiddenmessage');


const showName = () => {
  hiddenMessage.classList.remove('hide');
};

const hideName = () => {
  hiddenMessage.classList.add('hide');
};

const newBorder = () => {
  hoverImage.classList.add('orange');
  hoverImage.removeAttribute('id');
};



hoverImage.addEventListener('mouseover', showName);

hoverImage.addEventListener('mouseleave', hideName);

hoverImage.addEventListener('click', newBorder);
