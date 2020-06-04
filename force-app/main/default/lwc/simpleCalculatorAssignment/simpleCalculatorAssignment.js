import { LightningElement ,track} from 'lwc';

export default class SimpleCalculatorAssignment extends LightningElement {

    @track currentResult ;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'input1'){
            this.firstNumber = event.target.value;
        }
        else if(inputBoxName === 'input2'){
            this.secondNumber = event.target.value;
        }
    }

    addtwoNumberhandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of '+ firstN + '+' + secondN + ' is '+ (firstN+secondN);
       // this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN+secondN}`;
       // both line 23 and 24 are valid. diff. way to concatenation 
    }

    subtracttwoNumberhandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
    }

    multiplytwoNumberhandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} * ${secondN} is ${firstN * secondN}`;
    }

    dividetwoNumberhandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
    }

}