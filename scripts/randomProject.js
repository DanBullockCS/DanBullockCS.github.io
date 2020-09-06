// Select a random live project when you click the live project SVG
function showRandomProject() {
    let Link = document.getElementById("svg-link");
    
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            Link.href = "WhatColorIsThat";
            break;
        case 1:
            Link.href = "2020IsOverParty";
            break;
        case 2:
            Link.href = "GrenadeBrothers";
            break;
        case 3:
            Link.href = "LeagueKillViewer";
            break;
    }
}