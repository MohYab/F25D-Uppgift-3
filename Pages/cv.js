// DOM - Document Object Map
// JSON - JavaScript Object Notation
fetch('../data.json')
    .then(response => response.json())
    .then(jsonResponse => loadData(jsonResponse))
    .catch(error => console.error('Error loadin JSON: ', error));

function loadData(data) {
    console.log('data = ', data);
    let titleElment = document.getElementById('title');
    titleElment.textContent = data.header.title;

    let navListElement = document.getElementById('nav-list');

    data.header.nav.forEach(navItem => {
        let navElement = document.createElement('li');
        let navLinkElement = document.createElement('a');
        navElement.appendChild(navLinkElement);
        navLinkElement.href = navItem.link;
        navLinkElement.textContent = navItem.text;
        navListElement.appendChild(navElement)
    });

    // Presentation
    let presentationTitleElement = document.getElementById('presentation-title');
    let presentationContentElement = document.getElementById('presentation-content');
    let presentationLinkElement = document.getElementById('presentation-link');
    presentationTitleElement.textContent = data.cv.presentation.title;
    presentationContentElement.textContent = data.cv.presentation.text;
    presentationLinkElement.href = data.cv.presentation.link;

    // Education
    let educationTitleElement = document.getElementById('education-title');
    let educationLinkElement = document.getElementById('education-link');
    let educationEntriesElement = document.getElementById('education-entries');
    educationTitleElement.textContent = data.cv.education.title;
    educationLinkElement.href = data.cv.education.link;

    data.cv.education.entries.forEach(entry => {
        let p = document.createElement('p');
        p.innerHTML = `<strong>${entry.school}</strong> - ${entry.program}`
        educationEntriesElement.appendChild(p);
    });

    let experienceTitleElement = document.getElementById('experience-title');
    let experienceLinkElement = document.getElementById('experience-link');
    let experienceEntriesElement = document.getElementById('experience-entries');
    experienceTitleElement.textContent = data.cv.experience.title;
    experienceLinkElement.href = data.cv.experience.link;

    data.cv.experience.entries.forEach(entry => {
        let p = document.createElement('p');
        p.innerHTML = `<strong>${entry.job}</strong> - ${entry.company} (${entry.years})`
        experienceEntriesElement.appendChild(p);
    });

    let footerContentElemnt = document.getElementById('footer-content');
    footerContentElemnt.textContent = data.footer.text;
}
