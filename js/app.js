function playerSelect(event){
  const orderList =document.getElementById('order-list')
  const newItem = document.createElement('li')
  const itemValue = event
  if(orderList.children.length <5){
    
    newItem.innerText = itemValue
    orderList.appendChild(newItem)
  
  }
  else{
    alert('Player list is full already')
  }
  
}


document.getElementById('calculate-btn').addEventListener('click', ()=>{
const orderList =document.getElementById('order-list')
const playerExpenses = document.getElementById('player-expenses')
const perPlayerCostString =document.getElementById('per-player-cost')
const perPlayerCostValue = perPlayerCostString.value
const perPlayerCost = parseInt(perPlayerCostValue)
const calculateExpenses= perPlayerCost * orderList.children.length
if (perPlayerCostString.value!== ''){
playerExpenses.innerText= calculateExpenses
perPlayerCostString.value = ''
}
else {
alert('Enter Player Expenses!')
}



document.getElementById('calculate-total-btn').addEventListener('click', ()=>{

const totalCost = document.getElementById('total-cost')
const managerCostString =document.getElementById('manager-cost')
const managerCostValue = managerCostString.value
const managerCost = parseInt(managerCostValue)
const coachCostString = document.getElementById('coach-cost')
const coachCostValue = coachCostString.value
const coachCost = parseInt(coachCostValue)
if(managerCostString.value !== '' && coachCostString.value !==''){

totalCost.innerText =calculateExpenses + managerCost + coachCost
managerCostString.value=''
coachCostString.value=''
}
else{
alert('Enter Manager and Coach cost properly!')
}
})
})



