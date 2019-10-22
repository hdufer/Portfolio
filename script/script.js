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


let state = 0.1

function drawCircle(fillColor, strokeColor, percentageText) {
    window.requestAnimationFrame(function() {drawCircle(fillColor, strokeColor, percentageText)});

    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 5;

    if (state < 0.9 * 1.5)
        state += 0.01;
    else
        return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(50, 50, 35, 1.5 * Math.PI, state * Math.PI, false);
    ctx.fill();
    ctx.stroke();

    ctx.font = "20px Montserrat";
    ctx.fillStyle = "gray"
    ctx.fillText(percentageText, 30, 55);
}

drawCircle("white", "red", "90%");