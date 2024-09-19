/*
  step - 1 add event handler
  prevent page reload after form submit
  step -2 get the money in input form
*/


document.getElementById('add-money-btn').addEventListener('click',function(event){
  event.preventDefault(); // Reload failed in browser
  // amount get 
  const amountGet = document.getElementById('input-amount-get').value 
  const pinCheck = document.getElementById('input-password-get').value
  const currentAdd = parseFloat(amountGet)
  // console.log(amountGet);
  // console.log(pinCheck);
  // cash out part
  // const cashOut = document.getElementById('withdraw')
  if(pinCheck === '123'){
    // paragraph,div,h1 and every element nia asar jonno innerText use kora lagve
    const get = document.getElementById('money').innerText
    
    const previousMoney = parseFloat(get) // converted string to number
    const total = previousMoney + currentAdd
    console.log("You total amount: ", total);
    document.getElementById('money').innerText = total
  }else{
    alert('Wrong PassWord')
  }
})