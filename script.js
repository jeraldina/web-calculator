switch (calc){
    (num1 + num 2)
} 


function calculation() {
    let operator = document.getElementById('operator')
    let mathOperators = operator.options[operator.selectedIndex].value
    let answer = document.getElementById('answer')
  
    switch (mathOperators) {
      case '+':
        answer.innerHTML = num1 + num2;
        break
      
        case '-':
        answer.innerHTML = num1 - num2;
        break
     
        case '/':
        answer.innerHTML = num1 / num2;
        break
      
        case '*':
        answer.innerHTML = num1 * num2;
        break
    }
  }
  