function calculation() {
    let operator = document.getElementById('operator')
    let mathOperators = operator.options[operator.selectedIndex].value
    let answer = document.getElementById('answer')
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
  
    function mathValidation(){
     if ((num1 == "") || (num2 == "")){
     alert("Input is not valid. Please enter a number in all fields.");
     }
    }
  
     mathValidation()
  
    switch (mathOperators) {
      case 'add':
        answer.innerHTML = num1 + num2;
        break
      
        case 'sub':
        answer.innerHTML = num1 - num2;
        break
     
        case 'divide':
        answer.innerHTML = num1 / num2;
        break
      
        case 'multiply':
        answer.innerHTML = num1 * num2;
        break
    }
  }
  