function divideArray(arr){
    let evenNums=[];
    let oddNums=[];
    for(let i=0;i<arr.length;i++){
        if (arr[i]%2==0){
            evenNums.push(arr[i])
        }
        else{
            oddNums.push(arr[i])
        }

    }
    evenNums.sort();
    oddNums.sort();
    if (evenNums.length==0){
        evenNums="None"
    }
    if (oddNums.length==0){
        oddNums="None"
    }
    console.log("Even numbers",evenNums);
    console.log("Odd numbers",oddNums);
}


let nums = [4, 2, 9, 1, 8]; 

divideArray(nums);