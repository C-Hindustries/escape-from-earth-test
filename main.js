var money = 0
var completion = 0
var completionPlus = 0.1
var employNumCost = 50

function getEarn() {
  money += 1;
  document.getElementById("moneyNum").innerHTML = money;
}

function getWork() {
  completion += completionPlus;
  document.getElementById("completionNum").innerHTML = completion;
}

function getEmploy() {
  if (money > employNumCost) {
    money = money -= employNumCost;
    document.getElementById("moneyNum").innerHTML = money;
    employNumCost = employNumCost += employNumCost *= 2
    document.getElementById("employNum").innerHTML = employNumCost;
    completionPlus = completionPlus += 1
    document.getElementById("workExtraNum").innerHTML = completionPlus;
    
  }
}
