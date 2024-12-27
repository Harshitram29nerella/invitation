window.onload = function() {
  const audio = document.getElementById('audio');
  audio.play();

  const message = "You're invited to our baby's first birthday celebration!";
  const speech = new SpeechSynthesisUtterance(message);
  speech.lang = 'en-US';
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
};