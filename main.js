var money = 0
var completion = 0
var completionPlus = 0.01
var learnNumCost = 100

function getEarn() {
  money += 1;
  document.getElementById("moneyNum").innerHTML = money;
}

function getWork() {
  completion += completionPlus;
  document.getElementById("completionNum").innerHTML = completion; 
  
  if (completion > 5 <5.3) {
    window.alert("module completed!");
  }
  
  if (completion > 10 < 10.3){
  window.alert("boosters completed!");  
  }
  
  if (completion > 20 < 20.3) {
    window.alert("engines completed!");
  }
  
  if (completion > 30 < 30.3) {
    window.alert("fuel tanks completed!");
  }
  
  if (completion > 50 < 50.3){
    window.alert("main fusalge completed!");
  }
  
  if (completion > 60 < 60.25){
    window.alert("Oh no! your workshop has been hit by an earthquake and much of your work has been desroyed!");
    completion *= 0.4;
    document.getElementById("completionNum").innerHTML = completion;
    completionPlus *= 0.4;
     document.getElementById("workExtraNum").innerHTML = completionPlus;
  }
  
  if ("completion > 75 < 75.3"){
    window.alert("launch pad foundations completed!");
  }
  
 if (completion > 90 < 90.3) {
   window.alert("launch pad completed!");
 }
 
 if (completion > 96 < 96.3) {
   window.alert("moving rocket onto launch - nearly there now!");
 }
 
 if (completion < 100) {
   window.alert("Wow! You've escaped from earth and will now survive!");
 }
}
  
  function getEarn() {
  money += 1;
  document.getElementById("moneyNum").innerHTML = money;
}

function getLearn() {
  if (money > learnNumCost) {
    money = money -= learnNumCost;
    document.getElementById("moneyNum").innerHTML = money;
    learnNumCost = learnNumCost += learnNumCost *= 2
    document.getElementById("learnNum").innerHTML = learnNumCost;
    completionPlus = completionPlus += 0.01
    document.getElementById("workExtraNum").innerHTML = completionPlus;
    
  }
}
