var secondhand = document.querySelector("#secondhand");
var minutehand = document.querySelector("#minutehand");
var hourhand = document.querySelector("#hourhand");
var num=1;
var rotdeg=30;
while(num<13){
    rotateno(num);
    num++;
}
   
function rotateno(num){
    document.querySelector("#one").innerHTML=num;
    one= document.querySelector("#one");
    one.style.transformOrigin="100px 100px";
    one.style.transform="rotate("+rotdeg+"deg)";
    console.log(num+":"+ rotdeg);
    rotdeg+=30;
}
function update(){
    var date = new Date();
  //  console.log(date);
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var sec = date.getSeconds();
    secdeg= sec*(360/60);
    mindeg= mins*(360/60)+sec*(1/10);
    hrsdeg=hrs*(360/12)+mins*(1/2);
   // console.log(hrs + ":" + mins + ":" + sec)
    secondhand.style.transform = "rotate("+secdeg+"deg)";
    minutehand.style.transform = "rotate("+mindeg+"deg)";
    hourhand.style.transform = "rotate("+hrsdeg+"deg)";
}
setInterval(update,1000)

