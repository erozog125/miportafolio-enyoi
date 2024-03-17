const projects = [
  {
    idProject: 1,
    imgProject: 'https://res.cloudinary.com/erpersonalprojects/image/upload/v1691589860/5_tmkfox.png',
    titleproject: 'Chat Bidireccional',
    descriptionProject: 'Este es un chat trabajado con una herramienta llamada socket.io.',
    linkProject: 'https://chat-client-edwin-dev.netlify.app/'
  },  
  {
    idProject: 2,
    imgProject: 'https://res.cloudinary.com/erpersonalprojects/image/upload/v1691589859/6_qswhfq.png',
    titleproject: 'E-COMMERCE JS',
    descriptionProject: 'Este proyecto simula la creaciòn de un carrito de compras',
    linkProject: 'https://ermarketplace.netlify.app/'
  },  
  {
    idProject: 3,
    imgProject: 'https://res.cloudinary.com/erpersonalprojects/image/upload/v1691589859/2_mjdq8j.png',
    titleproject: 'Formulario de Contàctenos con Email-JS',
    descriptionProject: 'En este proyecto practicamos un formulario de contàctenos apoyados de la librerìa externa emailjs',
    linkProject: 'https://sendemail-er.netlify.app/'
  },  
  {
    idProject: 4,
    imgProject: 'https://res.cloudinary.com/erpersonalprojects/image/upload/v1691589859/4_ozws53.png',
    titleproject: 'Rick And Morty',
    descriptionProject: 'Veamo como recorrer una Api rest tan sencilla como Rick and morty.',
    linkProject: 'https://reactrickandmortyer.netlify.app/'
  }  
]

const references = [
  {
    name: "Juan Pérez",
    ocupation: "Desarrollador Frontend",
    phone: "123-456-7890",
    email: "juan.perez@example.com"
  },
  {
    name: "María González",
    ocupation: "Diseñadora UX/UI",
    phone: "234-567-8901",
    email: "maria.gonzalez@example.com"
  },
  {
    name: "Pedro Ramírez",
    ocupation: "Analista de Datos",
    phone: "345-678-9012",
    email: "pedro.ramirez@example.com"
  },
  {
    name: "Ana López",
    ocupation: "Gerente de Proyecto",
    phone: "456-789-0123",
    email: "ana.lopez@example.com"
  }
]

const experience = [
  {
    languageName: "Java",
    percentprogress: 75,
    image: "https://res.cloudinary.com/erpersonalprojects/image/upload/v1710510311/languages/Java_kidsvd.png",
    level: 'Intermedio'
  },
  {
    languageName: "React",
    percentprogress: 80,
    image: "https://res.cloudinary.com/erpersonalprojects/image/upload/v1710510312/languages/reactjs_gjq80r.png",
    level: 'Intermedio'
  },
  {
    languageName: "Node.js",
    percentprogress: 70,
    image: "https://res.cloudinary.com/erpersonalprojects/image/upload/v1710510311/languages/Node_i5zc7e.jpg",
    level: 'Intermedio'
  },
  {
    languageName: "MongoDB",
    percentprogress: 30,
    image: "https://res.cloudinary.com/erpersonalprojects/image/upload/v1710510312/languages/MongoDb_pwnnez.png",
    level: 'Básico'
  }
]


document.querySelectorAll('a[href^="#"]').forEach( anchor => {
  anchor.addEventListener('click', function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth' // Animación de desplazamiento suave
          });
      }
  });
});


loadSectionProjects()
function loadSectionProjects() {
  projects.forEach( project => createCardsProjects(project))
}

loadSectionReferences()
function loadSectionReferences() {
  references.forEach( ref => createCardsReferences(ref) )
}

loadSectionExperiences()
function loadSectionExperiences() {
  experience.forEach( exp => createCardsExperiences(exp) )
}


function createCardsProjects(project) {
  const cardProject = document.createElement('div')
  cardProject.classList.add('card-projects')

  const containerImg = document.createElement('div')
  containerImg.classList.add('container-img-card')

  const imgCard = document.createElement('img')
  imgCard.src = project.imgProject
  imgCard.alt = project.titleproject

  const containerDescription = document.createElement('div')
  containerDescription.classList.add('container-description-card')

  const titleCard = document.createElement('h3')
  titleCard.textContent = project.titleproject

  const  descriptionCard = document.createElement('p')
  descriptionCard.textContent = project.descriptionProject

  const goToProject = document.createElement('a')
  goToProject.href = project.linkProject

  goToProject.setAttribute('target','_blank')
  goToProject.textContent = 'Ir a proyecto'

  cardProject.appendChild(containerImg)
  cardProject.appendChild(containerDescription)

  containerImg.appendChild(imgCard)
  containerDescription.appendChild(titleCard)
  containerDescription.appendChild(descriptionCard)
  containerDescription.appendChild(goToProject)

  document.querySelector('.container-cards').appendChild(cardProject)  
}

function createCardsReferences(reference) {
  const cardReference = document.createElement('div')
  cardReference.classList.add('card-reference')

  const pName = document.createElement('p')
  pName.textContent = 'Nombre: '  
  const spanName = document.createElement('span')  
  spanName.textContent = reference.name
  pName.appendChild(spanName)
  
  const pOcupation = document.createElement('p')
  pOcupation.textContent = 'Ocupación: '
  const spanOcupation = document.createElement('span')
  spanOcupation.textContent = reference.ocupation
  pOcupation.appendChild(spanOcupation)
  
  const pPhone = document.createElement('p')
  pPhone.textContent = 'Teléfono: '
  const spanPhone = document.createElement('span')
  spanPhone.textContent = reference.phone
  pPhone.appendChild(spanPhone)
  
  const pEmail = document.createElement('p')
  pEmail.textContent = 'Email: '
  const spanEmail = document.createElement('span')
  spanEmail.textContent = reference.email
  pEmail.appendChild(spanEmail)

  cardReference.appendChild(pName)  
  cardReference.appendChild(pOcupation)  
  cardReference.appendChild(pPhone)  
  cardReference.appendChild(pEmail)
  
  document.querySelector('.card-references').appendChild(cardReference)
}

function createCardsExperiences(experience) {
  const cardExperience = document.createElement('div')
  cardExperience.classList.add('card-experience')
  const imgCard = document.createElement('img')
  imgCard.src = experience.image
  const title = document.createElement('h4')
  title.textContent = experience.languageName
  const level = document.createElement('h5')
  level.textContent = experience.level
  const progress = document.createElement('progress')
  progress.classList.add('progress-bar')
  progress.setAttribute('value', experience.percentprogress)
  progress.setAttribute('max', '100')

  cardExperience.appendChild(imgCard)
  cardExperience.appendChild(title)
  cardExperience.appendChild(progress)
  cardExperience.appendChild(level)

  document.querySelector('.container-experience').appendChild(cardExperience)
}





