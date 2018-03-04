var secondhand = document.querySelector("#secondhand");
var minutehand = document.querySelector("#minutehand");
var hourhand = document.querySelector("#hourhand");
function update(){
    var date = new Date();
    console.log(date);
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var sec = date.getSeconds();
    secdeg= sec*(360/60);
    mindeg= mins*(360/60)+sec*(1/10);
    hrsdeg=hrs*(360/12)+mins*(1/2);
    console.log(hrs + ":" + mins + ":" + sec)
    secondhand.style.transform = "rotate("+secdeg+"deg)";
    minutehand.style.transform = "rotate("+mindeg+"deg)";
    hourhand.style.transform = "rotate("+hrsdeg+"deg)";
}
setInterval(update,1000)