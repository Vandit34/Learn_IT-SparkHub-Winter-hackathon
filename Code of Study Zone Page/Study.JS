
//Initialize the varibles 

let songIndex=0;
// let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('masterPlay')

let songs=[
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName:"Heroes Tonight", filePath:"song/1.mp3",coverPath:"covers/1.jpg"} 
]

// audioElement=new Audio('1.mp3');

// "masterplay" click ho ne ke baad ka function
masterPlay.addEventListener('click',()=>
{
 if (audioElement.paused  || audioElement.currentTime<=0 ) {
   audioElement.play();
   masterPlay.classList.remove("fa-regular fa-circle-play");
   masterPlay.classList.add("fa-regular fa-circle-pause");

 }    
})

//Listen to Event


myProgressbar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');


});

