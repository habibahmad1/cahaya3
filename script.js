const buttonLink = document.querySelector('#link');
const buttonVideo = document.querySelector('#video');

const link = document.querySelector('.link');
const switchButton = document.querySelector('.video');

buttonVideo.addEventListener('click',(event) => {
    link.style.display = "none";
    switchButton.style.display = "flex";
    buttonLink.style.backgroundColor= "bisque";
    buttonVideo.style.backgroundColor= "salmon"
    event.preventDefault();
})
buttonLink.addEventListener('click',(event) => {
    switchButton.style.display = "none";
    link.style.display = "flex";
    buttonLink.style.backgroundColor= "salmon";
    buttonVideo.style.backgroundColor= "bisque"
    event.preventDefault();
})