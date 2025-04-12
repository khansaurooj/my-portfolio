const projects = [
    {
        title: 'Portfolio Website',
        description: 'A personal website to showcase my projects.',
        link: 'https://docs.google.com/document/d/1hPBHbi6u8Kft0dUsSfflKEbNFXvSA9kQmhrUBVToCNU/edit?usp=drive_link' 
    },
    {
        title: 'C++ Projects',
        description: 'Various C++ projects showcasing different algorithms and data structures.',
        link: 'https://drive.google.com/drive/folders/1GqiB94VuLyin3Wt1CsD88uPkV0mpO7qM?usp=drive_link' 
    }
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectList.appendChild(projectDiv);
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}. Your message has been sent!`);
    contactForm.reset();
});
