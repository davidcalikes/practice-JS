function playBeep() {
    var sound = document.getElementById("Sound");
    sound.play();
    sound.addEventListener('ended', function () {
      location.href = 'index.html';
    });
  }