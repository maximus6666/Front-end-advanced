function getRandomColor() {
  const rgbNumbers = [];
  for (let i = 0; i < 3; i++) {
    rgbNumbers.push(Math.round(Math.random() * 255));
  }

  return `rgb(${rgbNumbers.join(',')})`;
}

function generateBlocks() {
  const wrapper = document.createElement('div');
  document.body.append(wrapper);
  wrapper.style.display = 'flex';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.width = '250px';
  
  for (let index = 0; index < 25; index++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.width = '50px';
    block.style.height = '50px';
    block.style.backgroundColor = getRandomColor();
    wrapper.append(block);
  }
}

function generateBlocksInterval() {
  generateBlocks();
  const blockCollection = document.querySelectorAll('.block');

  setInterval(() => {
    blockCollection.forEach(block => block.style.backgroundColor = getRandomColor());
  }, 1000);
}

//generateBlocks();
//generateBlocksInterval();
