


function addStyleToTheButton() {
  var css = `.OpenPicInPicVideo {
    background-color: #5b3030;
    z-index: 44444444444444444;
    position: fixed;
    width: 84px;
    height: 84px;
    border-radius: 200px;
    color: white;
    font-size: 15px;
    bottom: 15px;
    right: 15px;
}`;
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  head.appendChild(style);
  style.type = 'text/css';
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  }
  else {
    style.appendChild(document.createTextNode(css));
  }
}

const YOUTUBE_URL = 'www.youtube.com';
const URL = window.location.href

const currentPageIsYoutube = URL.includes(YOUTUBE_URL);
addStyleToTheButton();

if (currentPageIsYoutube) {

  const OpenPicInPicVideo = document.createElement("button");
  OpenPicInPicVideo.classList.add("OpenPicInPicVideo");
  OpenPicInPicVideo.innerHTML = 'Picture in Picture';
  document.body.appendChild(OpenPicInPicVideo);

  OpenPicInPicVideo.addEventListener('click', function OpenPicInPicVideo() {
    const video = document.querySelector('video');
    video.requestPictureInPicture();

  });

}




