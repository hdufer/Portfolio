// Simple scrolling when clicking aboutMe Navbar or Learn More call to Action

let btn = document.getElementById("btn")
let navLinkAboutMe = document.getElementById("aboutMeLink");

function scrollToAboutMeSection() {
    document.getElementById('aboutMeSection').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

btn.onclick = () => scrollToAboutMeSection();
navLinkAboutMe.onclick = () => scrollToAboutMeSection();

// Canvas animation for Skills section

const canvas = document.getElementById('bar-circle');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 70, 70);