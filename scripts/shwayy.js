var s1 = new Audio('audio/shbaa.mp3');

function playAudio() {
  s1.play();
}
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
