
// find (anything) , activity on click mouse in out  , do work
document.getElementById("button-click").addEventListener("click",function(event){
  event.preventDefault()
  console.log('hi');
  // get the attribute
  const input = document.getElementById('get-input').value;
  const input1 = document.getElementById('get-input1').value;
  console.log(input,input1);
  if(input === 'uarif1933@gmail.com' && input1 === '12'){
    console.log("you are right");
    window.location.href = './home.html'
  }else{
    console.log('you are wrong');
    document.write("Please type right input")
  }
}) 