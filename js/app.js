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






