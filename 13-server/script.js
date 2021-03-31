const showPeopleBtn = document.querySelector('#show-people');
const hidePeopleBtn = document.querySelector('#hide-people');

const charactersArr = axios.get('https://swapi.dev/api/films/2')
  .then((res) => {
    const data = res.data;
    const characters = data.characters;

    return characters;
  });

const personsInfo = charactersArr.then((res) => {
    return res.map(async (character) => await axios.get(character)
      .then((res) => {
        return res.data;
      }));
  })
  .then((dataArr) => {
    const arr = dataArr.map((a) => a.then((data) => {
      return {
        name: data.name,
        birthday: data.birth_year,
        male: data.gender
      };
    }));
    return arr;
  });

// Виводимо інформацію про персонажів 5 епізоду
function getPersonsInfo(event) {
  if (event.target === showPeopleBtn) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    personsInfo.then((promisesArr) => {
      promisesArr.map((promis, i) => {
        promis.then((res) => {

          const infoBlock = document.createElement('div');
          const name = document.createElement('h2');
          const birthday = document.createElement('h5');
          const male = document.createElement('h5');

          name.innerText = res.name;
          birthday.innerText = 'Was born: ' + res.birthday;
          male.innerText = 'Male: ' + res.male;

          infoBlock.classList.add('infoBlock');

          wrapper.append(infoBlock);
          infoBlock.append(name, birthday, male);
        });
      });
    });

    document.body.append(wrapper);
  }
  showPeopleBtn.removeEventListener('click', getPersonsInfo);
  hidePeopleBtn.addEventListener('click', hidePersonsInfo);
}

// Ховаємо інформацію про персонажів
function hidePersonsInfo(event) {
  if (event.target === hidePeopleBtn) {
    const info = document.querySelector('.wrapper');
    info.remove();
    showPeopleBtn.addEventListener('click', getPersonsInfo);
    hidePeopleBtn.removeEventListener('click', hidePersonsInfo);
  }
}

showPeopleBtn.addEventListener('click', getPersonsInfo);
hidePeopleBtn.addEventListener('click', hidePersonsInfo);

// Дістаєм інформацію по планетах
const showPlanetBtn = document.querySelector('#show-planet');
const hidePlanetBtn = document.querySelector('#hide-planet');

async function getPlanetsInfo() {
  const nextBtn = document.createElement('button');
  nextBtn.classList.add('next-planets-btn');
  nextBtn.innerText = 'Next';

  const planetInfo = await axios.get('https://swapi.dev/api/planets/');
  const planetsDataArr = await planetInfo.data.results;
  const planetsNameList = planetsDataArr.map((planet) => planet.name);

  const infoBlock = document.createElement('div');
  infoBlock.classList.add('planet-info-block');

  const infolist = document.createElement('ul');

  document.body.append(infoBlock);
  infoBlock.append(infolist);
  infoBlock.append(nextBtn);

  planetsNameList.forEach((element) => {
    const name = document.createElement('li');
    name.innerText = element;
    infolist.append(name);
    name.classList.add('hide');
  });

  for (let i = 0; i < 5; i++) {
    const planetName = document.querySelectorAll('li');
    planetName[i].classList.remove('hide');
  }

  function showNextPlanetList() {
    const planetName = document.querySelectorAll('li');
    planetName.forEach(el => el.classList.add('hide'));
    for (let i = 5; i < planetsNameList.length; i++) {
      planetName[i].classList.remove('hide');
    }
  }
  nextBtn.addEventListener('click', showNextPlanetList);

  showPlanetBtn.removeEventListener('click', getPlanetsInfo);
  hidePlanetBtn.addEventListener('click', hidePlanetsInfo);
}

function hidePlanetsInfo(event) {
  if (event.target === hidePlanetBtn) {
    const info = document.querySelector('.planet-info-block');
    info.remove();

    showPlanetBtn.addEventListener('click', getPlanetsInfo);
    hidePlanetBtn.removeEventListener('click', hidePlanetsInfo);
  }
}

showPlanetBtn.addEventListener('click', getPlanetsInfo);