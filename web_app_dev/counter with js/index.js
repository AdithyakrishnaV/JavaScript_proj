//set a counter and save the state 
//let's use localStorage to save state

let counter=0;
function count(){
    counter++;
    document.getElementById('c').innerHTML=counter;
    window.localStorage.setItem("count",counter);
}

let cout= window.localStorage.getItem("count");
document.getElementById('c').innerHTML=cout;
counter=cout;

