function calculator(){
    let resultMessage = '';
    let inputOperation = 0;
    let countOperands = 0;
    let numbers = [];
    const mathOperations = ['+', '-', '/', '*'];
    const operands = [2, 3, 4];

    function choiseOperation () {
        while(true) {
            inputOperation = prompt('Enter math operation');
            if(mathOperations.includes(inputOperation)) {
            break;
            }
            alert('Wrong operation!!!');
        }
    }
    function numberOperants () {
        while (true)  {  
            countOperands = prompt('Enter number from 2 to 4');  
            if(operands.includes(+countOperands)){
            break;
            }
            alert('Wrong number!!!');  
        }  
    }
    function inputOperants() {
        while(numbers.length < +countOperands) {
            let number = prompt('Enter number');
            if((+number || +number === 0) && number !== '') {
                numbers.push(number);
            } 
            else{
                alert('Wrong number!!!');  
            }
        }
    }
    function resultOperations() {
        let result = +numbers[0];
        let expression = numbers[0];
        let operation;
        let index = 1;
        while(index < numbers.length){
           switch(inputOperation){
                case'+': 
                    result += +numbers[index]; 
                    operation = ' + ';
                    expression += operation += numbers[index]; 
                    ++index;
                break;
                case'-': 
                    result -= +numbers[index]; 
                    operation = ' - ';
                    expression += operation += numbers[index];
                    ++index;
                break;
                case'*': 
                    result *= +numbers[index];
                    operation = ' * ';
                    expression += operation += numbers[index];
                    ++index; 
                break;
                case'/': 
                    result /= +numbers[index];
                    operation = ' / ';
                    expression += operation += numbers[index]; 
                    ++index;
                break;
            }
        }
        alert(expression + ' = ' + result);
        // if(index === 1) {
        //     resultMessage += `${numbers[index-1]} ${inputOperation} ${numbers[index]}`;
        // }else {
        //     resultMessage += `${inputOperation} ${numbers[i]}`;
        // }
        // debugger
        // // alert('result: ' + result);
        // alert(`${resultMessage}=${result}`);
    }
    choiseOperation();
    numberOperants();
    inputOperants();
    resultOperations();
}
calculator();

