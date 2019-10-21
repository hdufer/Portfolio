let btn = document.getElementById('btn')

btn.onclick = () => document.getElementById('aboutMeSection1').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
