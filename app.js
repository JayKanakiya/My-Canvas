var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var down = false;
context.lineWidth = 10
document.getElementById('download').addEventListener("click", downloadFile);
 canvas.addEventListener("mousemove", draw);
 canvas.addEventListener("mousedown",function(){
     down = true;
     context.beginPath();
     context.moveTo(x,y);
     canvas.addEventListener("mousemove",draw);
 })
canvas.addEventListener("mouseup",function(){
    down=false;
})
 function draw(e){
     x = e.clientX - canvas.offsetLeft;
     y = e.clientY - canvas.offsetTop;
     if(down==true){
         context.lineTo(x,y);
         context.stroke();
     }
 }

 function changeColor(color){
     context.strokeStyle = color;
 }

 function clearCanvas(){
     context.clearRect(0,0,canvas.width,canvas.height);
 }
function setwidth(){
    curr = brushwidth.value;
}
 function downloadFile() {
 	var button = document.getElementById('download');
 	var dataURL = canvas.toDataURL('image/png');
 	button.href = dataURL;
 }
