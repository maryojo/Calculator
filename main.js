function buttonValue(v){
    display.value += v
}
function clearScreen(){
    document.getElementById("output").reset();
}
// Use the id of the form
function backspace(){
    display.value = display.value.slice(0, display.value.length -1)
}
// use the slice method