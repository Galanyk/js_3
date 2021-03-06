function calculator(){
    
    let inputOperation = 0;
    let countOperands = 0;
    let numbers = [];
    const MATH_OPERATIONS= ['+', '-', '/', '*'];
    const OPERANDS = [2, 3, 4];

    function choiseOperation () {
        while(true) {
            inputOperation = prompt('Enter math operation');
            if(MATH_OPERATIONS.includes(inputOperation)) {
            break;
            }
            alert('Wrong operation!!!');
        }
    }

    function numberOperants () {
        while (true)  {  
            countOperands = prompt('Enter number from 2 to 4');  
            //In this case I use function "includes" for training.
            // Exspression with ranges more flexible.
            if(OPERANDS.includes(+countOperands)){
            break;
            }
            alert('Wrong number!!!');  
        }  
    }

    function inputOperants() {
        while(numbers.length < +countOperands) {
            let number = prompt('Enter number');
            if((+number || +number === 0) && !number.includes(' ')){
              if(inputOperation === '/' && +number === 0){
                    alert('Wrong number!!!');  
                }
              else{
                    numbers.push(number);
                }  
            } 
            else{
                alert('Wrong number!!!');  
            }
        }
    }

    function resultOperations() {
        let result = +numbers[0];
        let expression = numbers[0];
       
        for(let index = 1; index < numbers.length; ++index){
           switch(inputOperation){
                case'+': 
                    result += +numbers[index]; 
                    expression += ' + ' + numbers[index]; 
                break;

                case'-': 
                    result -= +numbers[index]; 
                    expression += ' - ' + numbers[index];
                break;

                case'*': 
                    result *= +numbers[index];
                    expression += ' * ' + numbers[index];
                break;

                case'/': 
                    result /= +numbers[index];
                    expression += ' / ' + numbers[index]; 
                break;
            }
        }
     
        alert(expression + ' = ' + result);
    }
    
    choiseOperation();
    numberOperants();
    inputOperants();
    resultOperations();
}

calculator();
