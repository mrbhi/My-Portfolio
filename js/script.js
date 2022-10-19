// Mobile Menu Drop Down

const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-list');
const close = document.querySelector('.hamburger-menu-close');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

document.querySelectorAll('.menu-link').forEach((l) => l.addEventListener('click', () => {
  menu.classList.remove('active');
}));

// Project Modal Box
const projectSection = document.querySelector('.frame-container');
let render = '';

const projectCard = [
  {
    title: 'Profesional Art Printing Data More',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://mrbhi.github.io/My-Portfolio',
    sourceLink: 'https://github.com/mrbhi/My-Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://mrbhi.github.io/My-Portfolio',
    sourceLink: 'https://github.com/mrbhi/My-Portfolio',
  },
  {
    title: 'Website Protfolio',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://mrbhi.github.io/My-Portfolio',
    sourceLink: 'https://github.com/mrbhi/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data More',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://mrbhi.github.io/My-Portfolio',
    sourceLink: 'https://github.com/mrbhi/My-Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://mrbhi.github.io/My-Portfolio',
    sourceLink: 'https://github.com/mrbhi/My-Portfolio',
  },
  {
    title: 'Website Protfolio',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technology: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://mrbhi.github.io/My-Portfolio',
    sourceLink: 'https://github.com/mrbhi/My-Portfolio',
  },
];

projectCard.forEach((data) => {
  render += `<div id="work1" class="card-works work1">
                <div class="card-content">
                <h2 class="work-title">${data.title}</h2>
                <h2 class="lg-work-title">${data.title}</h2>
                <p>${data.description}</p>
                <ul class="card-ul">
                    <li>${data.technology[0]}</li>
                    <li>${data.technology[1]}</li>
                    <li>${data.technology[2]}</li>
                </ul>
                </div>
                <p class="data-title" hidden>${data.title}</p>
                <p class="data-description" hidden>${data.description}</p>
                <p class="data-liveLink" hidden>${data.liveLink}</p>
                <p class="data-sourceLink" hidden>${data.sourceLink}</p>
                <a href="#" class="btn btn-project">See Project</a>
            </div>`;
  projectSection.innerHTML = render;
});

const container = document.querySelector('.frame-container');
const modal = document.querySelector('.modal-container');
const css = document.querySelector('.no-display');
const closeModal = document.querySelector('.close-icon');
const featuredProject = document.querySelector('.featured-btn-project');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.description');
const modalLive = document.querySelector('.modal-project-live');
const modalSource = document.querySelector('.modal-project-source');

const projectBtn = container.querySelectorAll('.btn-project');
const projectTitle = container.querySelectorAll('.data-title');
const projectDescription = container.querySelectorAll('.data-description');
const projectLiveLink = container.querySelectorAll('.data-liveLink');
const projectSourceLink = container.querySelectorAll('.data-sourceLink');

for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    modalTitle.textContent = projectTitle[i].innerHTML;
    modalDescription.textContent = projectDescription[i].innerHTML;
    modalLive.sourceLink = projectLiveLink[i].outerHTML;
    modalSource.sourceLink = projectSourceLink[i].outerHTML;
    modal.classList.add('visible');
  });
}
closeModal.addEventListener('click', () => {
  css.classList.remove('active');
  modal.classList.remove('visible');
});

featuredProject.addEventListener('click', () => {
  css.classList.add('active');
  modal.classList.add('visible');
});

// FORM VALIDATION

const submitForm = document.querySelector('#submit');
const email = document.querySelector('#email');
const errorElement = document.querySelector('#email-error');

const error = (event) => {
  event.preventDefault();
  errorElement.classList.add('error');
  email.classList.add('error')
  errorElement.textContent = 'Please make use of LowerClass text for your email address';
  errorElement.classList.remove('success');
};

const success = () => {
  email.classList.remove('error')
  errorElement.classList.remove('error');
  errorElement.classList.add('success');
};

submitForm.addEventListener('click', (event) => {
  const pattern = /[A-Z]/;
  if (pattern.test(email.value)) {
    error(event);
  } else {
    success();
  }
});