for(let i=1;i<=50;i++) {
    if(i===10) {
        continue;
    }
    console.log(i);
    if(i===25) {
        console.log("loop interrompido")
        break;
    }
}