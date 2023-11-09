function calcWordFrequencies(word){
    var wordArray=word.split(" ")
    const wordMap= new Map()
    wordArray.forEach(element => {
        if (wordMap.has(element)){
            wordMap.set(element,wordMap.get(element)+1);
        }else{
            wordMap.set(element,1);
        }
    });
    wordMap.forEach((value,key)=>{
        console.log(key, "  ", value)

    })
}

//calcWordFrequencies("hey hi Mark hi mark")

calcWordFrequencies(prompt("Enter a sentence"))