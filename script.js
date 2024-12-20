function updateClock(){
    const now=new Date();
    let hrs=now.getHours();
    const ap=hrs>=12?"PM":"AM";
    hrs=(hrs%12)||12;
    hrs=hrs.toString().padStart(2,0);
    const mins=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const str=`${hrs}:${mins}:${sec} ${ap}`;
    document.getElementById("clock").innerHTML=str;
}
updateClock();
setInterval(updateClock,1000);