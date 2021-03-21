const keys = document.querySelectorAll('.key');

function playNote(event) {
  keys.forEach((key) => {
    if (key.dataset.audio === event.code) {
      const note = document.getElementById(event.code);
      // console.log(e.code);
      note.play();
      key.classList.add('active');
    }
  });
}

function stopNote(event) {
  keys.forEach((key) => {
    if (key.dataset.audio === event.code) {
      const note = document.getElementById(event.code);
      // console.log(e.code);
      note.currentTime = 0;
      note.pause();
      key.classList.remove('active');

    }
  });
}

window.addEventListener('keydown', playNote);
window.addEventListener('keyup', stopNote);
