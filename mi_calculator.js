// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function sqroot(){
  display.value=Math.sqrt(eval(display.value))
}
function percent(){
  display.value=eval((display.value)/100)
}
function backspace(){
  display.value=display.value.toString().slice(0, -1);
}