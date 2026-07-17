// break exits the loop completely
// continue skips the current itteration


for (let i = 0; i < 5; i++){
    if( i === 2) {
        break;
    }
    console.log("i",i)
}


for (let j = 0; j < 5; j++) {
    if(j===2) {
        continue;
    }
    console.log("j",j)
}
