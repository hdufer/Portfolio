// Simple scrolling when clicking aboutMe Navbar or Learn More call to Action

let btn = document.getElementById("btn")
let navLinkAboutMe = document.getElementById("aboutMeLink");

function scrollToAboutMeSection() {
    document.getElementById('aboutMeTitle').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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

// Interact with this table if u want to add more skillBar, before add canvas element in the DOM because it iterate through it
let circleArray = [["white", "red", 0.75],["white", "#fcdb03", 0.80],["white", "skyblue", 0.8],["white", "lightgreen", 0.7],["white", "purple", 0.9]]

// If page reload on right percentage to drawCircle
let percentScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
if (percentScroll >= 50)
{
    for(let i = 0; i < circleArray.length; i++)
    {
        drawCircle(circleArray[i][0], circleArray[i][1], circleArray[i][2], i);
    }
}

// Without this scrollEvent repeat to many time
let launchAnim = false;

// Event for the percentage to drawCircle
document.body.onscroll = () => {
    percentScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    if (percentScroll >= 50 && launchAnim == false)
    {
        launchAnim = true;
        for(let i = 0; i < circleArray.length; i++)
            drawCircle(circleArray[i][0], circleArray[i][1], circleArray[i][2], i);
    }
}




