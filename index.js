const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const watchTrailerBtn = document.getElementById('watch-trailer-btn');
const closePopupBtn = document.getElementById('close-popup');
const trailerVideoContainer = document.getElementById(
  'trailer-video-container'
);
const video = document.querySelector('video');

watchTrailerBtn.addEventListener('click', () => {
  trailerVideoContainer.classList.add('active');
});

closePopupBtn.addEventListener('click', () => {
  trailerVideoContainer.classList.remove('active');
  video.pause();
  video.currentTime = 0;
});
