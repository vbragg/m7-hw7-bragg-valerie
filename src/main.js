//Variables

const hoverImage = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hiddenmessage');


//Arrow
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


//Event Lisenters
hoverImage.addEventListener('mouseover', showName);

hoverImage.addEventListener('mouseleave', hideName);

hoverImage.addEventListener('click', newBorder);
