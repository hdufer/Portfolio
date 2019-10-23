// Simple scrolling when clicking aboutMe Navbar or Learn More call to Action

let btn = document.getElementById("btn")
let navLinkAboutMe = document.getElementById("aboutMeLink");

function scrollToAboutMeSection() {
    document.getElementById('aboutMeSection').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

btn.onclick = () => scrollToAboutMeSection();
navLinkAboutMe.onclick = () => scrollToAboutMeSection();

// Canvas animation for Skills section

let canvases = document.getElementsByClassName('skillCanvas');
console.log(canvases);

let state = 0.1;

function drawCircle(fillColor, strokeColor, percentage, idCanvas) {
    let ctx = canvases[idCanvas].getContext('2d');
    window.requestAnimationFrame(function() {drawCircle(fillColor, strokeColor, percentage, idCanvas)});

    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 5;

    if (state < percentage * 1.5)
        state += 0.01;
    else
        return;

    ctx.clearRect(0, 0, canvases[idCanvas].width, canvases[idCanvas].height);
    ctx.beginPath();
    ctx.arc(50, 50, 35, 1.5 * Math.PI, state * Math.PI, false);
    ctx.fill();
    ctx.stroke();

    ctx.font = "20px Montserrat";
    ctx.fillStyle = "gray"
    ctx.fillText(percentage * 100 + "%", 30, 55);
}

// Scrolling In percentage

let h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

// If page reload on right percentage to drawCircle
let percentScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
if (percentScroll >= 90)
{
        drawCircle("white", "red", 0.9, 0);
        drawCircle("white", "skyblue", 0.8, 1);
        drawCircle("white", "lightgreen", 0.8, 2);
        drawCircle("white", "purple", 0.8, 3);
}

// Event for the percentage to drawCircle
document.body.onscroll = () => {
    percentScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    if (percentScroll >= 90)
    {
        drawCircle("white", "red", 0.9, 0);
        drawCircle("white", "skyblue", 0.8, 1);
        drawCircle("white", "lightgreen", 0.8, 2);
        drawCircle("white", "purple", 0.8, 3);
    }
}




