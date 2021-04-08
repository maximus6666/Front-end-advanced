const keys = Array.from(document.querySelectorAll('.key'));
const notes = document.querySelectorAll('audio');

//Усуваємо мініпаузу на початку аудіо
notes.forEach((note) => {
  note.currentTime = 1;
});

function playNote(event) {
  const key = keys.find(key => key.dataset.audio === event.code);
  if (!key) {
    return;
  }
  
  const note = document.getElementById(event.code);
  note.play();
  key.classList.add('active');
}

function stopNote(event) {
  const key = keys.find(key => key.dataset.audio === event.code);
  if (!key) {
    return;
  }

  const note = document.getElementById(event.code);
  note.pause();
  note.currentTime = 1;
  key.classList.remove('active');
}

document.addEventListener('keydown', playNote);
document.addEventListener('keyup', stopNote);
