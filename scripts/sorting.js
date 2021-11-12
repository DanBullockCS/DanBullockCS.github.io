// Sort projects based on criterion
// This doesn't scale well. Will refactor one day :P

// Web projects
let liveProjects = document.getElementById("LiveProjectsCard");
let ineventors = document.getElementById("IneventorsCard");
let classroomCompanion = document.getElementById("CC_Card");
let lol = document.getElementById("League_Card");
let Badlion = document.getElementById("BadlionCard");
  
// Games
let KeepUp = document.getElementById("KeepUpCard");
let UnityGames2020 = document.getElementById("Unity_Card");

// Misc
let noteTakR = document.getElementById("NoteTakR_Card");
let soccerToybox = document.getElementById("Soccer_Card");
let ytCompanion = document.getElementById("YT_Card");

function sortByAll() {
  // Hardcode css fix for displaced cards
  lol.style.justifySelf = 'start';
  classroomCompanion.style.justifySelf = 'end';
  Badlion.style.justifySelf = 'start';
  noteTakR.style.justifySelf = 'start';
  soccerToybox.style.justifySelf = 'end';
  ytCompanion.style.justifySelf = 'start';

  let elements = document.getElementsByClassName("projects")[0];
  for (let i = 0; i < elements.children.length; i++) {
    elements.children[i].style.display = 'grid';
  }
}

function sortByWeb() {
  // Hardcode css fix for displaced cards
  lol.style.justifySelf = 'end';
  classroomCompanion.style.justifySelf = 'start';
  Badlion.style.justifySelf = 'start';

  // Project Array
  let WebProjectArr = [];
  WebProjectArr.push(Badlion);
  WebProjectArr.push(liveProjects);
  WebProjectArr.push(ineventors);
  WebProjectArr.push(classroomCompanion);
  WebProjectArr.push(lol);

  // Set all to none except for Web Projects
  let elements = document.getElementsByClassName("projects")[0];
  for (let i = 0; i < elements.children.length; i++) {
    elements.children[i].style.display = 'none';
    for (let j = 0; j < WebProjectArr.length; j++) {
      if (elements.children[i] === WebProjectArr[j]) {
        elements.children[i].style.display = 'grid';
      }
    }
  }
}

function sortByGames() {
  // Hardcode css fix for displaced cards
  Badlion.style.justifySelf = 'end';

  // Project Array
  let GameProjectArr = [];
  GameProjectArr.push(Badlion);
  GameProjectArr.push(KeepUp);
  GameProjectArr.push(UnityGames2020);

  // Set all to none except for Game Projects
  let elements = document.getElementsByClassName("projects")[0];
  for (let i = 0; i < elements.children.length; i++) {
    elements.children[i].style.display = 'none';
    for (let j = 0; j < GameProjectArr.length; j++) {
      if (elements.children[i] === GameProjectArr[j]) {
        elements.children[i].style.display = 'grid';
      }
    }
  }
}

function sortByMisc() {
  // Hardcode css fix for displaced cards
  noteTakR.style.justifySelf = 'end';
  soccerToybox.style.justifySelf = 'start';
  ytCompanion.style.justifySelf = 'end';

   // Project Array
   let MiscProjectArr = [];
   MiscProjectArr.push(noteTakR);
   MiscProjectArr.push(soccerToybox);
   MiscProjectArr.push(ytCompanion);
 
   // Set all to none except for Game Projects
   let elements = document.getElementsByClassName("projects")[0];
   for (let i = 0; i < elements.children.length; i++) {
     elements.children[i].style.display = 'none';
     for (let j = 0; j < MiscProjectArr.length; j++) {
       if (elements.children[i] === MiscProjectArr[j]) {
         elements.children[i].style.display = 'grid';
       }
     }
   }
}
