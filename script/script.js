let btn = document.getElementById("btn")
let navLinkAboutMe = document.getElementById("aboutMeLink");

function scrollToAboutMeSection() {
    document.getElementById('aboutMeSection').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

btn.onclick = () => scrollToAboutMeSection();
navLinkAboutMe.onclick = () => scrollToAboutMeSection();
