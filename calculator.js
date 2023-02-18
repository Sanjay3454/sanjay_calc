function displayNum(num){
    input.value+=num
}

function evaluateExpr(){

    input.value=eval(input.value)
}

function allClear(){

    input.value= ""
}
function backSpace(){
    input.value=input.value.slice(0,-1)
}