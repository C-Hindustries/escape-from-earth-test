var money = 0
var completion = 0
var completionPlus = 0.01
var learnNumCost = 100
var employNumCost = 100
var earnPlus = 1
var promtionCost = 100

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
    employPlus = employPlus += 1;
    document.getElementById("earnNum").innerHTML = employPlus;
  }
}

function getPromotion() {
  if (money > PromotionCost) {
    money = money -= PromotionCost;
    document.getElementById("moneyNum").innerHTML = money;
    PromotionCost = PromotionCost += PromotionCost *= 1.2;
    document.getElementById("promotionPrice").innerHTML = PromotionCost;
    earnPlus = earnPlus += 1;
    document.getElementById("earnNum").innerHTML = earnPlus;
    
  }
