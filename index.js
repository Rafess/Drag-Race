const startButton = document.querySelector("button[id='startButton']");
const stopButton = document.querySelector("button[id='stopButton']");
const form = document.querySelector("form");
const competitor = document.querySelector("input");
const list = document.querySelector("ul");
let arrayOfCompetitors = [];
let listOfCompetitors = [];
let chronometerId;
let counter = 0;
form.addEventListener("submit", function(event) {event.preventDefault()});
function competitorAdder() {
    list.innerHTML += `<li id='${competitor.value}'>${competitor.value}</li>`;
    arrayOfCompetitors = [...arrayOfCompetitors,`${competitor.value}`];
    console.log(arrayOfCompetitors);
    form.reset();
}
function inictialShot() {
  for (let runners of arrayOfCompetitors) {
    runners = {name: runners, time: `${counter + Math.round(Math.random()*10)}`}
     listOfCompetitors = [...listOfCompetitors, runners];
  }
  return listOfCompetitors;
}
function startRace() {
    if (!chronometerId) {
        chronometerId = setInterval(function () {
        counter+= 1;
        console.log(counter)
        }, Math.round(Math.random()*1000))
    }
}


function stopRace() {
inictialShot();
if (chronometerId !== undefined && chronometerId !== null) {
console.log(arrayOfCompetitors)
console.log(listOfCompetitors)
for(i=0; i<100; i++) {
window.clearInterval(i);
}
listOfCompetitors.forEach((runner)=> runner.time = (counter + Math.random()*10));
let result = Math.min(...listOfCompetitors.map((item) => item.time));
for (const index in listOfCompetitors) {
if (result === listOfCompetitors[index].time) {
let winner = []
winner = [...winner, listOfCompetitors[index]];
winnerOnScreen = document.querySelector(`#${listOfCompetitors[index].name}`);
winnerOnScreen.setAttribute("class", "winner");
localStorage.setItem("winner", JSON.stringify(winner))
sessionStorage.setItem("Allcompetitors", JSON.stringify(listOfCompetitors))
}
}
}
chronometerId = null;
counter = 0;
}
function resetList() {
list.innerHTML = '';
}