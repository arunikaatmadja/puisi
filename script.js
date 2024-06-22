var audio = document.getElementById('audio');
audio.loop = true;
audio.play();

var audio = document.getElementById('audio');
audio.addEventListener('ended', function() {
  this.play(); // Memutar ulang musik ketika selesai
});
audio.play();
