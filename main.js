fetch('hem.json')
    .then(response => response.json())
    .then(jsonResponse => loadData(jsonResponse))
    .catch(error => console.error('Error loading JSON: ', error));

function loadData(data) {
    console.log('data = ', data);
    let titleElment = document.getElementById('title');
    titleElment.textContent = data.index.header.title;
    
    //Nav
    let navListElement = document.getElementById('nav-list');

    data.index.nav.forEach(navItem => {
        let navElement = document.createElement('li');
        let navLinkElement = document.createElement('a');
        navElement.appendChild(navLinkElement);
        navLinkElement.href = navItem.link;
        navLinkElement.textContent = navItem.text;
        navListElement.appendChild(navElement)
    });

    //Profile image
    const imagesContainer = document.getElementById('imagesContainer');
    data.index.profileimages.forEach(image=>{
    const imageCard = document.createElement('div');
    imageCard.classList.add('column');

    // Skapa HTML-strukturen för bilden
    imageCard.innerHTML = `
      <h3></h3>
      <img src="${image.bild}" alt="${image.alt}">
      <p>${image.description}</p>
      <a></a>
    `;

    // Lägg till bildkortet i container
    imagesContainer.appendChild(imageCard);
    });

    //CV
    let presentationTitleElement = document.getElementById('presentation-title');
    let presentationContentElement = document.getElementById('presentation-content');
    let presentationLinkElement = document.getElementById('presentation-link');
    presentationTitleElement.textContent = data.index.presentation.title;
    presentationContentElement.textContent = data.index.presentation.text;
    presentationLinkElement.href = data.index.presentation.link;

    //Projects
    let projectsHeadingElement = document.getElementById('projects-heading')
    projectsHeadingElement.textContent = data.index.projects.heading;


    const projectsContainer = document.getElementById('projectsContainer');
  
    // Loopa igenom varje projekt och skapa ett "kort" med innehåll
    data.index.projects.items.forEach(project => {
    // Skapa en div med klassen "column"
    const projectCard = document.createElement('div');
    projectCard.classList.add('column');

    // Skapa HTML-strukturen för projektet
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.image}" alt="${project.alt}">
      <p>${project.description}</p>
      <a href="${project.Link}">${project.LinkText}</a>
    `;

    // Lägg till projektkortet i container
    projectsContainer.appendChild(projectCard);
  });

    //Footer
    let footerContentElemnt = document.getElementById('footer-content');
    footerContentElemnt.textContent = data.footer.text;

}
