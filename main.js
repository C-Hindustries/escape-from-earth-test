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
