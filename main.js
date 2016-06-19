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
var clickNum = 0
var level = 0
var rewardCost = 100
var rewardCost2 = 250
var rewardCost3 = 500
var gambleCost = money /= 2
var gambleMax = money *= 2

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
  clickNum = clickNum;
  level = level;
  document.getElementById("levelNum").innerHTML = level;
  rocketName = gameStartPrompt;
  document.getElementById("rocketName").innerHTML = rocketName;
}

function getEarn() {
  money += 1;
  document.getElementById("moneyNum").innerHTML = money;
}

function getWork() {
  completion += completionPlus;
  clickNum += 1;
  document.getElementById("completionNum").innerHTML = completion; 
  
  if (clickNum >= 100) {
  	window.alert("level up! Now that you have completed a part of your rocket, you will now recieve a random award between 1 and 1000 - keep your fingers crossed!");
  	money = money += Math.floor((Math.random() * 1000) + 1);
  	document.getElementById("moneyNum").innerHTML = money;
  	level = level += 1;
  	document.getElementById("levelNum").innerHTML = level;
  	clickNum = 0;
  }
  
  if (completion >= 100) {
    window.alert("BLAST OFF! You have succeded, and now will survive the destruction of the Earth (don't forget to bring popcorn)!");
    window.alert("would you like to restart?");
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
    window.alert("BLAST OFF! You have succeded, and now will survive the destruction of the Earth (don't forget to bring popcorn)!");
    window.alert("would you like to restart?");
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
    employPlusTimer = 0
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
    level: level,
    clickNum: clickNum,
    rewardCost: rewardCost,
    rewardCost2: rewardCost2,
    rewardCost3: rewardCost3,
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
	if (typeof savegame.clickNum !== "undefined") clickNum = savegame.clickNum;
	if (typeof savegame.level !== "undefined") level = savegame.level;
	if (typeof savegame.rewardCost !== "undefined") rewardCost = savegame.rewardCost;
	if (typeof savegame.rewardCost2 !== "undefined") rewardCost2 = savegame.rewardCost2;
	if (typeof savegame.rewardCost3 !== "undefined") rewardCost3 = savegame.rewardCost3;

alert("Load Successful!");
rocketName = gameStartPrompt;
document.getElementById("rocketName").innerHTML = rocketName;

refreshStats();
}

function startGame() {
     var gameStartPrompt = prompt("Welcome! Please Choose a Name For Your rocket!");
     rocketName = gameStartPrompt;
     document.getElementById("rocketName").innerHTML = rocketName;
     document.getElementById("starterDiv").className = "hidden";
     document.getElementById("contentDiv").className = "contentDiv";
     document.getElementById("loaderDiv").className = "hidden";
}

function startLoad() {
     document.getElementById("starterDiv").className = "hidden";
     document.getElementById("loaderDiv").className = "hidden";
     document.getElementById("contentDiv").className = "contentDiv";
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
	if (typeof savegame.clickNum !== "undefined") employPlusTimer = savegame.clickNum;
	if (typeof savegame.level !== "undefined") employPlusTimer = savegame.level;

alert("Load Successful!");
rocketName = gameStartPrompt;
document.getElementById("rocketName").innerHTML = rocketName;

refreshStats();
}

function getReward() {
   if (money > rewardCost) {
    money = money -= rewardCost;
    document.getElementById("moneyNum").innerHTML = money;
    money += Math.floor((Math.random() * 200) + 1);
    document.getElementById("moneyNum").innerHTML = money;
}
}

function getReward2() {
    if (money > rewardCost2) {
      money = money -= rewardCost2;
      document.getElementById("moneyNum").innerHTML = money;
      money += Math.floor((Math.random() * 500) + 1);
      document.getElementById("moneyNum").innerHTML = money;
} 
}

function getReward3() {
    if (money > rewardCost2) {
      money = money -= rewardCost3;
      document.getElementById("moneyNum").innerHTML = money;
      money += Math.floor((Math.random() * 1000) + 1);
      document.getElementById("moneyNum").innerHTML = money;
} 
}

function gambleAll() {
	money = money -= gambleCost;
	money = money += Math.floor((Math.random() * gambleMax) + 1);
	document.getElementById("moneyNum").innerHTML = money;
}
