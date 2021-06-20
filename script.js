function calculation() {
    let operator = document.getElementById('operator')
    let mathOperators = operator.options[operator.selectedIndex].value
    let answer = document.getElementById('answer')
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
  
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
  