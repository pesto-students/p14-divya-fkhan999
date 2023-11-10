function drawTriangle(n){
    for(let i=1;i<=n;i++){
        let str=""
        for(let j=1; j<=i;j++){
            str=str+"*"
            
        }
        console.log(str);
    }
}

drawTriangle(5)