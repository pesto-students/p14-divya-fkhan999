function counter(){
    let count=0;
    function counterInner(){
        count++;
        return count
    }
    return counterInner
}
let firstCounter=counter();

let secondCounter=counter();

let firstValues=[]
firstValues.push(firstCounter())
firstValues.push(firstCounter())
firstValues.push(firstCounter())
firstValues.push(firstCounter())
firstValues.push(firstCounter())

let secondValues=[]
secondValues.push(secondCounter())
secondValues.push(secondCounter())
secondValues.push(secondCounter())

console.log({firstValues},{secondValues});