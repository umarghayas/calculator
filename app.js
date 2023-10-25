// alert("what do here eh?")

function calc(num){
    var result = document.getElementById("result")
    result.value += num;
}
function equals(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}
function clearAll(){
    var result = document.getElementById("result")
    result.value = ""   
}
function erase(){
    var result = document.getElementById("result")
    result.value = result.value.slice(0,-1)
}
function percent(){
    equals()
    var result = document.getElementById("result")
    result.value = result.value * 100
}