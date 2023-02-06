// without time interval the clock will be static with no reload

setInterval(DigitalClock, 1000);

function DigitalClock(){
    let t = new Date();
    let hr  = t.getHours();
    let min  = t.getMinutes();
    let sec = t.getSeconds();
    let session = "AM";  
   
    if (hr >= 12){
        hr = hr-12;
        session = "PM";
    }    
    let CurrentTime= hr + ":" + min + ":" + sec +" "+  session;
    document.getElementById("clock").innerHTML=CurrentTime;
}
DigitalClock();


