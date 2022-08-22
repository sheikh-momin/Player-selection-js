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
playerExpenses.innerText= calculateExpenses
perPlayerCostString.value = ''






})




