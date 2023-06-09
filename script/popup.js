/* eslint-disable */
// project detail
const cardWorksWrapper = document.getElementById('grid-container');
const popupCardDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";

const projectDetails = [
  {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups are required.',
    image: './images/desktop-card1.png',
    alt: 'tonic project image',
    companyRoles: ['Canopy', 'Back End Dev', '2015'],
    skills: ['html', 'css', 'javascript'],
    liveLink: { link: './index.html', text: 'See live' },
    sourceLink: { link: 'https://github.com/Abmart0803/Portfolio-Project' },
    buttonText: 'See Project',
    id: 1,
  },

  {
    title: 'Multi_Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './images/portfolio_card4.png',
    alt: 'Multiple project image',
    companyRoles: ['FACEBOOK', 'Back End Dev', '2015'],
    skills: ['html', 'css', 'javascript'],
    liveLink: { link: './index.html', text: 'See live' },
    sourceLink: {
      link: 'https://github.com/Abmart0803/Portfolio-Project',
    },
    buttonText: 'See Project',
    flip: 1,
    id: 2,
  },

  {
    title: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups are required.',
    image: './images/desktop-card3.png',
    alt: 'tonic project image',
    companyRoles: ['FACEBOOK 360', 'Back End Dev', '2015'],
    skills: ['html', 'css', 'javascript'],
    liveLink: { link: './index.html', text: 'See live' },
    sourceLink: {
      link: 'https://github.com/Abmart0803/Portfolio-Project',
    },
    buttonText: 'See Project',
    id: 3,
  },
  {
    title: 'Uber Navigation',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups are required.',
    image: './images/desktop-card4.png',
    alt: 'tonic project image',
    companyRoles: ['Uber', 'Lead Developer', '2018'],
    skills: ['html', 'css', 'javascript'],
    liveLink: { link: './index.html', text: 'See live' },
    sourceLink: { link: 'https://github.com/Abmart0803/Portfolio-Project' },
    buttonText: 'See Project',
    flip: 1,
    id: 4,
  },
];

const creatProjectDetails = (item) => {
  const snapshootDetails = document.createElement('div');
  if (item.flip === 1) {
    snapshootDetails.classList.add('snapshoot_revers');
  } else {
    snapshootDetails.classList.add('snapshoot');
  }

  const roles = item.companyRoles.map((value, index) => {
    if (index !== 0) {
      return `<div class="card-bullet-separator"></div> <span class="card-canopy card-canopy-details">${value}</span>`;
    }
    return `<span class="card-canopy">${value}</span>`;
  });

  const skillsList = item.skills.map(
    (count) => `<li class="card-tools">${count}</li>`,
  );

  const innerHTML = `<img src="${item.image}" alt="${item.alt}">
  <div class="card-sizing">
    <h2 class="card-title-text">${item.title}</h2>
    <div class="card-list">
      ${roles.join('')}
    </div>
    <p class="card-main-text">${item.description}</p>
    <div>
      <ul class="card-tools-list">
        ${skillsList.join('')}
      </ul>
    </div>
    <div class="card-button-box">
      <button card-id=${
  item.id
} class="card-button popup-card-button">See Project</button>
    </div>
  </div>`;

  snapshootDetails.innerHTML = innerHTML;
  cardWorksWrapper.appendChild(snapshootDetails);
};

projectDetails.forEach((item) => creatProjectDetails(item));

const popupDetails = (item) => {
  const roles = item.companyRoles.map((value, index) => {
    if (index !== 0) {
      return `<div class="card-bullet-separator"></div> <span class="card-canopy card-canopy-details">${value}</span>`;
    }
    return `<span class="card-canopy">${value}</span>`;
  });

  const skillsList = item.skills.map(
    (count) => `<li class="card-tools">${count}</li>`,
  );

  const innerHtml = `<div id="popup-card-container"></div>
  <section id="popup-card-section">
    <article class="popup-card">
      <header class="popup-details-header">
        <nav class="popup-card-details">
          <h2 class="card-title-text">${item.title}</h2>
          <button id="popup-close-button" class="popup-close-button">
            <img src="./images/close-window.svg" alt="popup close icon">
          </button>
        </nav>
        <div class="card-list">
          ${roles.join('')}
        </div>
      </header>
      <section class="popup-details-container">
        
          <img src="${item.image}" alt="${item.alt}">
        
        <div class="popup-card-details-container"> 
          <p class="card-main-text popup-card-description">${popupCardDescription}</p>
          <div class="popup-tools-sizing">
            <ul class="card-tools-list">
              ${skillsList.join('')}
            </ul>
            <div class="popup-card-separator"></div>
            <div class="popup-card-links">
              <a href="${
  item.liveLink.link
}" target="https://abmart0803.github.io/Portfolio-Project/" class="card-button popup-button">
                <span>See live</span>
                <img src="./images/live-link.png" alt="live link icon">
              </a>
              <a href="${
  item.sourceLink.link
}" target="https://github.com/Abmart0803/Portfolio-Project" class="card-button popup-button">
                <span>See source</span>
                <img src="./images/source-link.png" alt="github link icon">
              </a>

            </div>
          </div>
        </div>
      </section>
    </article>
  </section>`;
  return innerHtml;
};

const createPopup = (button, callback = () => null) => {
  const id = parseInt(button.getAttribute('card-id'), 10);
  const data = projectDetails.filter((item) => item.id === id);
  document.getElementById('popup-project-card-section').innerHTML = popupDetails(data[0]);
  return callback();
};

// Close popup
const closePopup = () => {
  const popupCardContainer = document.getElementById('popup-card-container');
  const popupCloseButton = document.getElementById('popup-close-button');

  logo.classList.add('blur-filter');
  home.classList.add('blur-filter');
  button.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');

  popupCloseButton.addEventListener('click', () => {
    document.getElementById('popup-project-card-section').innerHTML = '';
    document.body.style.margin = '';
    document.body.style.overflow = '';

    logo.classList.remove('blur-filter');
    home.classList.remove('blur-filter');
    button.classList.remove('blur-filter');
    mainBody.classList.remove('blur-filter');
  });
  popupCardContainer.addEventListener('click', () => {
    document.getElementById('popup-project-card-section').innerHTML = '';
    document.body.style.margin = '';
    document.body.style.overflow = '';
    button.classList.remove('blur-filter');
  });
  for (let i = 0; i < popupCardContainer.childNodes.length; i += 1) {
    popupCardContainer.childNodes[i].addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }
};

const cardButton = document.querySelectorAll('.popup-card-button');
cardButton.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    createPopup(button, closePopup);
  });
});