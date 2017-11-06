var mathOperation;
var number = '';
var number1;
var number2;
var result = 0;
//clean input
function clear() {
	document.getElementById('number').value = '';
}
//clean all
function reset(){
	clear();
	number =  number1 = number2 = mathOperation = '';
}
//get number
function getNumber(num) {
	number = document.getElementById('number').value;
	switch (num) 
	{
		case 1: {
			number += '1';
			break;
		}
		case 2: {
			number += '2';
			break;
		}
		case 3: 
		{
			number += '3';
			break;
		}
		case 4: {
			number += '4';
			break;
		}
		case 5: {
			number += '5';
			break;
		}
		case 6: {
			number += '6';
			break;
		}
		case 7: {
			number += '7';
			break;
		}
		case 8: {
			number += '8';
			break;
		}
		case 9: {
			number += '9';
			break;
		}
		case 0: {
			number += '0';
			break;
		}
		case 'point' : {
			number += '.';
			break;
		}	
	}
	document.getElementById('number').value = number;
//	return number;
}
//choice of operation
function getOperation(oper) {
	switch (oper)   {
	case 1: {  //button +
      mathOperation = '+';
      break;
    }
    case 2: {  //button -
    	mathOperation = '-';
    break;
    }
    case 3: {  //button *
      mathOperation = '*';
	  break;
    }
    case 4: {  //button /
      mathOperation = '/';
	  break;
    }
  }
  number1 = parseFloat(document.getElementById('number').value);
  clear();
//  return mathOperation, number1, number;
}
//get result
function showResult() {
	number2 = parseFloat(document.getElementById("number").value);
if (number1 && number2)	{
	switch(mathOperation) {
		case '+': {
			result = number1 + number2;
			break;	
		}
		case '-': {
			result = number1 - number2;
			break;	
		}
		case '*': {
			result = number1 * number2;
			break;	
		}
		case '/': {
			result = number1 / number2;
			break;
		}
		default: {
			alert('Enter the number');
		}			
	}
	var res = result;
	var printResult = number1+mathOperation+number2+'='+result;
	document.getElementById("number").value = res;	//return result
	document.getElementById("getResult").innerHTML = printResult;//return result
	console.log(number1+mathOperation+number2+'='+result);	
} else {
	alert('Enter the number');
}
}
