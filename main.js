var money = 0;
var completion = 0;
var n = completion.toFixed(2);
var completionPlus = 0.01;
var learnNumCost = 100;
var n = learnNumCost.toFixed();
var employNumCost = 100;
var n = employNumCost.toFixed();
var earnPlus = 1;
var promtionCost = 100;
var n = promtionCost.toFixed();
var employPlusTimer = 0

function refreshStats() {
  money = money;
  document.getElementById("moneyNum").innerHTML = money;
  learnNumCost = learnNumCost;
  document.getElementById("learnNum").innerHTML = learnNumCost;
  completion = completion;
  document.getElementById("completionNum").innerHTML = completion;
  completionPlus = completionPlus;
  document.getElementById("workExtraNum").innerHTML = completionPlus;
  employNumCost = employNumCost;
  document.getElementById("employNum").innerHTML = employNumCost;
  earnPlus = earnPlus;
  employPlusTimer = employPlusTimer;
  document.getElementById("addPerSecond").innerHTML = employPlusTimer;
}

function getEarn() {
  money += 1;
  document.getElementById("moneyNum").innerHTML = money;
}

function getWork() {
  completion += completionPlus;
  document.getElementById("completionNum").innerHTML = completion; 
  
  if (completion >= 100) {
    window.alert("BLAST OFF! You have succeded, and now will survive the destruction of the Earth (don't forget to bring popcorn)! Would you like restart?");
    completion = 0;
    document.getElementById("completionNum").innerHTML = completion;
    money = 0
    document.getElementById("moneyNum").innerHTML = money;
    completionPlus = 0.01;
    document.getElementById("workExtraNum").innerHTML = completionPlus;
    learnNumCost = 100;
    document.getElementById("learnNum").innerHTML = learnNumCost;
    employNumCost = 100;
    document.getElementById("employNum").innerHTML = employNumCost;
  }
}
  
  function getEarn() {
  money =  money += earnPlus;
  document.getElementById("moneyNum").innerHTML = money;
}

function getLearn() {
  if (money > learnNumCost) {
    money = money -= learnNumCost;
    document.getElementById("moneyNum").innerHTML = money;
    learnNumCost = learnNumCost += learnNumCost *= 1.2;
    document.getElementById("learnNum").innerHTML = learnNumCost;
    completionPlus = completionPlus += 0.01;
    document.getElementById("workExtraNum").innerHTML = completionPlus;
  }
}

function getEmploy() {
  if (money > employNumCost) {
    money = money-= employNumCost;
    document.getElementById("moneyNum").innerHTML = money;
    employNumCost = employNumCost += employNumCost *= 1.2;
    document.getElementById("employNum").innerHTML = employNumCost;
    employPlusTimer = employPlusTimer += 0.001;
  }
}

// 1 Second Loop
window.setInterval(function(){
  // Put code to be run every second in here.
 addCompletion();
}, 1000);

function addCompletion() {
  if (completion >= 100) {
    window.alert("BLAST OFF! You have succeded, and now will survive the destruction of the Earth (don't forget to bring popcorn)! Would you like restart?");
    completion = 0;
    document.getElementById("completionNum").innerHTML = completion;
    money = 0
    document.getElementById("moneyNum").innerHTML = money;
    completionPlus = 0.01;
    document.getElementById("workExtraNum").innerHTML = completionPlus;
    learnNumCost = 100;
    document.getElementById("learnNum").innerHTML = learnNumCost;
    employNumCost = 100;
    document.getElementById("employNum").innerHTML = employNumCost;
    employNumCost = 0
    document.getElementById("addPerSecond").innerHTML = employPlusTimer;
  }
  completion = completion += employPlusTimer;
  document.getElementById("completionNum").innerHTML = completion;
  document.getElementById("addPerSecond").innerHTML = employPlusTimer;
}

function getSave(){
	"use strict";
	var save = {
	  money: money,
    completion: completion,
    completionPlus: completionPlus,
    learnNumCost: learnNumCost,
    employNumCost: employNumCost,
    earnPlus: earnPlus,
    promtionCost: promtionCost,
    employPlusTimer: employPlusTimer,
};
	localStorage.setItem("save",JSON.stringify(save));
	alert("Save Successful!");
}

function getLoad(){
	"use strict";
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.money !== "undefined") money = savegame.money;
	if (typeof savegame.completion !== "undefined") completion = savegame.completion;
	if (typeof savegame.completionPlus !== "undefined") completionPlus = savegame.completionPlus;
	if (typeof savegame.learnNumCost !== "undefined") learnNumCost = savegame.learnNumCost;
	if (typeof savegame.employNumCost !== "undefined")  employNumCost = savegame. employNumCost;
	if (typeof savegame.earnPlus !== "undefined") earnPlus = savegame.earnPlus;
	if (typeof savegame.promtionCost !== "undefined") promtionCost = savegame.promtionCost;
	if (typeof savegame.employPlusTimer !== "undefined") employPlusTimer = savegame.employPlusTimer;

alert("Load Successful! (may not update stats immediately)");
function refreshSats()
}
