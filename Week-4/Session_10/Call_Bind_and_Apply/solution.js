class Calculator{
    add(num1,num2){
        return num1+num2
    }
    subtract(num1,num2){
        return num1-num2
    }
    multiply(num1,num2){
        return num1*num2
    }
    divide(num1,num2){
        return num1/num2
    }

}

class ScientificCalculator extends Calculator{
    square(num){
        return num**2
    }
    cube(num){
        return num**3
    }
    power(num1,num2){
        return num1**num2
    }
}

const calculator=new Calculator();
const calculator_scientific=new ScientificCalculator();


console.log(calculator.add.call(calculator_scientific,10,5));

console.log(calculator.subtract.apply(calculator_scientific,[10,5]));


function multiplyByTwo(num){
    return num*2
}

ScientificCalculator.mulby2=multiplyByTwo.bind(ScientificCalculator)

console.log(ScientificCalculator.mulby2(5));

function powerOfThree(num){
    return num**3
}

ScientificCalculator.pow3=powerOfThree.bind(ScientificCalculator)

console.log(ScientificCalculator.pow3(2))

