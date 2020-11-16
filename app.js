//Resources 
const menuItems = document.getElementById('menu-items');
const menuBtn = document.getElementById('menu');
const closeMenuBtn = document.getElementById('close-menu');

const skillsTab = document.getElementById('skills');
const worksTab = document.getElementById('works');
const sayHelloBtn = document.getElementById('say-hello');

const devWorksContainer = document.getElementById('works-as-a-developer');
const designWorksContainer = document.getElementById('works-as-a-designer');
const developerBtn = document.getElementById('developer-btn');
const designerBtn = document.getElementById('designer-btn');

const projects = document.getElementsByClassName('project');

const dim = document.getElementById('dim');
const photoHolder = document.getElementById('photo-holder');

//Menu btn is clicked
menuBtn.addEventListener('click', () => {
    menuItems.classList.add('fade-in');
});

//Close-Menu btn is clicked
closeMenuBtn.addEventListener('click', () => {
    menuItems.classList.remove('fade-in');
});

//close menu when a menu item is clicked on mobile or tablet
function tabIsClicked(element){
    element.addEventListener('click', () => {
        menuItems.classList.remove('fade-in');
        if(element.id === 'say-hello') location.assign('#contact-me'); //navigate to contacts when say hello is clicked
    });
}
tabIsClicked(skillsTab);
tabIsClicked(worksTab);
tabIsClicked(sayHelloBtn);

//Developer btn is clicked
developerBtn.addEventListener('click', () => {
    developerBtn.classList.add('colored-btn');
    designerBtn.classList.remove('colored-btn');
    devWorksContainer.style.display = 'grid';
    designWorksContainer.style.display = 'none';
})

//Designer btn is clicked
designerBtn.addEventListener('click', () => {
    designerBtn.classList.add('colored-btn');
    developerBtn.classList.remove('colored-btn');
    designWorksContainer.style.display = 'grid';
    devWorksContainer.style.display = 'none';
})

//Hover state for projects
for(let project of projects){
    //Check if the developer btn is active
    project.addEventListener('mouseover', () => {
        if(developerBtn.classList.contains('colored-btn')) project.lastElementChild.style.display = 'flex';
    });
    project.addEventListener('mouseout', () => {
        if(developerBtn.classList.contains('colored-btn')) project.lastElementChild.style.display = 'none';
    });
    
    //check if the designer btn is active
    project.addEventListener('click', () => {
        if(designerBtn.classList.contains('colored-btn')){
            let src = `http://127.0.0.1:5500/images/ui-screens/${project.id}`;
            dim.style.display = "block";
            photoHolder.style.background = `url(${src})  no-repeat`;
            photoHolder.style.backgroundSize = 'cover';
            photoHolder.style.backgroundPosition = 'center';
            //display img in another tab
            //window.open(`http://127.0.0.1:5500/images/ui-screens/${project.id}`, '_blank');
        }
    });
}

//click anywhere on screen to hide dim and photo
dim.addEventListener('click', () => {
    dim.style.display = "none";
    photoHolder.style.background = "none";
})