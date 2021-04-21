const homeNav = document.querySelectorAll("#header");
const navContent = document.querySelectorAll("#content");
const navBasicTask = document.querySelectorAll("#basic_task");
const navOurProjects = document.querySelectorAll("#our_projects");
const navContactUs = document.querySelectorAll("#contact_us");

const home = document.querySelector(".header")
const content = document.querySelector(".content")
const basicTask = document.querySelector(".basic_task")
const ourProjects = document.querySelector(".our_projects")
const contactUs = document.querySelector(".contact_us")


const goToEliment = (id, to) =>{
    id.forEach(el => {
        el.addEventListener("click",()=>{
            to.scrollIntoView({ behavior: "smooth" })
        })
    });
}

goToEliment(homeNav, home);
goToEliment(navContent, content);
goToEliment(navBasicTask, basicTask);
goToEliment(navOurProjects, ourProjects);
goToEliment(navContactUs, contactUs);

const linckWebToIcon = (id, url) => {
    document.getElementById(id).addEventListener('click',()=>{
        document.location.href = url;

    })
}




linckWebToIcon("twitter", "https://twitter.com/");
linckWebToIcon("linkedin", "https://www.linkedin.com/")
linckWebToIcon("faceboock", "https://www.facebook.com/")
linckWebToIcon("pinterest", "https://www.pinterest.com/")