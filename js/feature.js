//  show cash out form and hide the add money form 
 document.getElementById('withdraw').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
 })


// show add money form and hide the cash out form 
document.getElementById('addMoney').addEventListener('click',function(){
  document.getElementById('add-money-form').classList.remove('hidden')
  document.getElementById('cash-out-form').classList.add('hidden')
})