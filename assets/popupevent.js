function openmodalwindow(event) {
  const containerid = event.target.value;
  const element = document.getElementById(containerid);
  element.classList.toggle('popup-model');
  const blur = document.querySelector('#bgbodycontainer');
  blur.classList.toggle('body-blur');
  document.querySelector('body').style.overflow = 'hidden';
}

function closemodalwindow() {
  const element = document.querySelector('.popup-model');
  element.classList.remove('popup-model');
  const body = document.querySelector('.body-blur');
  body.classList.remove('body-blur');
  document.querySelector('body').style.overflow = 'scroll';
}

const seeprojects = document.querySelectorAll('.btnseeprojectid');
seeprojects.forEach((element) => {
  element.addEventListener('click', openmodalwindow);
});

const closepopups = document.querySelectorAll('.projectcloseicon');
closepopups.forEach((element) => {
  element.addEventListener('click', closemodalwindow);
});
