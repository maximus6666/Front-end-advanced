const showPeopleBtn = document.querySelector('#show-people');
const hidePeopleBtn = document.querySelector('#hide-people');
const showPlanetBtn = document.querySelector('#show-planet');
const hidePlanetBtn = document.querySelector('#hide-planet');
const wrapper = document.querySelector('.person-wrapper');
const filmId = document.querySelector('#film-Id');
const infoBlock = document.querySelector('.planet-info-block');
const nextBtn = document.querySelector('.next-planets-btn');
let nextPage = '';

//Дістаєм інформацію про персонажів
async function getPersonsInfo(filmId) {
  const charactersArr = await axios.get(`https://swapi.dev/api/films/${filmId.value}/`);
  const personsLinks = charactersArr.data.characters.map((link) => {
    return link.replace('http', 'https');
  });

  const personsInfo = personsLinks.map((link) => {
    return axios.get(link).then((res) => {
      return {
        name: res.data.name,
        birthday: res.data.birth_year,
        gender: res.data.gender
      };
    });
  });

  return Promise.all(personsInfo);
}

// Виводимо інформацію про персонажів епізоду
function displayPersonsInfo(info) {
  wrapper.innerHTML = '';

  info.forEach((person) => {
    const infoBlock = document.createElement('div');
    const name = document.createElement('h2');
    const birthday = document.createElement('h5');
    const gender = document.createElement('h5');

    infoBlock.classList.add('info-block');
    wrapper.append(infoBlock);

    name.innerText = person.name;
    birthday.innerText = 'Was born: ' + person.birthday;
    gender.innerText = 'Male: ' + person.gender;

    infoBlock.append(name, birthday, gender);
  });
}

// Дістаєм інформацію по планетах та відображаєм 
async function getPlanetsInfo(page = 'https://swapi.dev/api/planets/') {
  const planetInfo = await axios.get(page);
  const planetsDataArr = planetInfo.data.results;
  const planetsNameList = planetsDataArr.map((planet) => planet.name);

  infoBlock.innerHTML = '';

  const infolist = document.createElement('ul');
  infoBlock.append(infolist);
  infoBlock.append(nextBtn);

  planetsNameList.forEach((element) => {
    const name = document.createElement('li');
    name.innerText = element;
    infolist.append(name);
  });

  nextPage = planetInfo.data.next;
}

//Додаєм обробники подій для персонажів
showPeopleBtn.addEventListener('click', async () => {
  try {
    const personsInfo = await getPersonsInfo(filmId);
    displayPersonsInfo(personsInfo);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      alert('Enter correct number of film (1-6)');
    } else {
      alert('Something went wrong, please, try later');
    }
  }
});
hidePeopleBtn.addEventListener('click', () => wrapper.innerHTML = '');

//Додаєм обробники подій для планет
showPlanetBtn.addEventListener('click', async () => {
  getPlanetsInfo();
  nextBtn.classList.remove('hide');
});
hidePlanetBtn.addEventListener('click', () => {
  infoBlock.innerHTML = '';
  nextBtn.classList.add('hide');
});

// Кнопка з наступною сторінкою планет
nextBtn.addEventListener('click', async () => {
  if (nextPage) getPlanetsInfo(nextPage.replace('http', 'https'));
  else {
    nextBtn.outerHTML = '<h2>This is the end of the list of planets</h2>';
  }
});
