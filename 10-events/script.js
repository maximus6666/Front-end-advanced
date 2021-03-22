const keys = Array.from(document.querySelectorAll('.key'));
const notes = document.querySelectorAll('audio');

//Усуваємо мініпаузу на початку аудіо
notes.forEach((note) => {
  note.currentTime = 1;
});

function playNote(event) {
  keys.find((key) => {
    if (key.dataset.audio === event.code) {
      const note = document.getElementById(event.code);
      note.play();
      key.classList.add('active');
    }
  });
}

function stopNote(event) {
  keys.find((key) => {
    if (key.dataset.audio === event.code) {
      const note = document.getElementById(event.code);
      // console.log(e.code);
      note.currentTime = 1;
      note.pause();
      key.classList.remove('active');
    }
  });
}

document.addEventListener('keydown', playNote);
document.addEventListener('keyup', stopNote);
