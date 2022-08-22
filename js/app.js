// function addFun(){
//   const orderList =document.getElementById('ol')
//   const newItem =document.getElementById('new-item').innerText
//   const newListObj = document.createElement('li')
//   if(orderList.children.length <5){
    
//     newListObj.innerText = newItem
//     orderList.appendChild(newListObj)
//   }
//   else{
//     alert('add error')
//   }
  
// }
// document.getElementById('btn').addEventListener('click', function(event){
  
//   addFun();
//   document.getElementById('btn').disabled = true;
// })



function playerSelect(event){
    const orderList =document.getElementById('order-list')
  const newItem = document.createElement('li')
  const itemValue = event
  if(orderList.children.length <5){
    
    newItem.innerText = itemValue
    orderList.appendChild(newItem)
  }
  else{
    alert('add error')
  }
  document.querySelectorAll('.select-btn').target.disabled = true;
}