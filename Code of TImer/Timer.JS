//variables
let worktitle=document.getElementById('work');
let breaktitle=document.getElementById('break');

let worktime=25;
let breaktime=5;
let seconds='00'


//display
window.onload=()=>
{
    document.getElementById("minutes").innerHTML=worktime;
    document.getElementById("seconds").innerHTML=seconds;
worktitle.classList.add('active');
}

//start timer
function start(){
//chanfe the button

document.getElementById("start").style.display="none";
document.getElementById("reset").style.display="block";

    //change the time
    seconds=59;

    let workminutes=worktime-1;
    let breakminutes=breaktime-1;

    breakcount=0;

    //countdown
let timerfunction=()=>
{
    document.getElementById('minutes').innerHTML=workminutes;
    document.getElementById('seconds').innerHTML=seconds;

seconds=seconds-1;
if (seconds==0) {
workminutes=workminutes-1;
if (workminutes==-1) {
    if (breakcount %2==0) {
        // start break
        workminutes=breakminutes;
        breakcount++;
    //change the paniel
    worktitle.classList.remove('active');
breaktitle.classList.add('active');

}
else
{
    //continue work
    workminutes=breakminutes;
    breakcount++;


    //change the paniel
breaktitle.classList.remove("active");
worktitle.classList.add("active");

}
    
}
    seconds=59;
}

}
               setInterval(timerfunction,1000) ;      

}










































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































