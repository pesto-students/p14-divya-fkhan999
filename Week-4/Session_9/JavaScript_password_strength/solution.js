function isStrongPassword(password){

    if (password.length<8){
        return false;
    }
    if (password.includes("password")){
        return false;
    }
    let isCap=false
    for(let i=0;i<password.length;i++){
        let asciiChar=password.charCodeAt(i);
        if (asciiChar>=65 && asciiChar<=90){
            isCap=true;
            break
        }
    }
    return isCap;
}

console.log(isStrongPassword("Qwerty1234"));