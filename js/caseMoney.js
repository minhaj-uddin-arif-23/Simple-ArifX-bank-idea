document.getElementById('cash-btn').addEventListener('click',function (event){
  event.preventDefault()
  const CaseAmount = document.getElementById('input-amount-cash').value 
  const CheckPin = document.getElementById('input-password').value
  // convert string to Number 
  const finalCashMoney = parseFloat(CaseAmount)
  if(CheckPin === '123'){
    const getBalance = document.getElementById('money').innerText
    const currentAmount =  parseFloat(getBalance)
    let totalAmount = currentAmount - finalCashMoney
    document.getElementById("money").innerText = totalAmount
  }else{
    alert("You type wrong password")
  }
})