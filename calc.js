const input = document.getElementById('inp');
const button = document.getElementsByTagName("button");
const buttonp = document.getElementsByClassName("%");



function disp(value){
    input.value += value;
}
function clearall(){
    input.value = "";
}
function equal(){
        let string1 = input.value;
        let arr1 = string1.split("");
        let lastinput = arr1.pop();
        if(lastinput=='%'){
            console.log(lastinput);
            input.value = arr1.join("") /100;}
        
        else {
    try{
        input.value = eval(input.value)
    }
    catch(error){input.value="error";}

    }}

function clearone(){
    let string = input.value; 
    let arr = string.split("");
    arr.pop();
    input.value = arr.join("");
    }

    

