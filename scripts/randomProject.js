// Select a random live project when you click the live project SVG

const NUM_PROJECTS = 5;

function showRandomProject() {
    let Link = document.getElementById("svg-link");
    
    switch (Math.floor(Math.random() * NUM_PROJECTS)) {
        case 0:
            Link.href = "WhatColorIsThat";
            break;
        case 1:
            Link.href = "GrenadeBrothers";
            break;
        case 2:
            Link.href = "LeagueKillViewer";
            break;
        case 3:
            Link.href = "PlatformerTechDemo";
            break;
        case 4:
            Link.href = "PaintSplatterTechDemo";
            break;
    }
}
