var mouseEvent="empty";
var lastpositionofX, lastpositionofY;
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{color=document.getElementById("colorBox").value;
width=document.getElementById("lineBox").value;

    mouseEvent="mouseDown"}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{mouseEvent="mouseUp"}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{mouseEvent="mouseLeave"}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) 
{
    currentpositionofmouseX=e.clientX-canvas.offsetLeft;
    currentpositionofmouseY=e.clientY-canvas.offsetTop;
    if(mouseEvent="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentpositionofmouseX, currentpositionofmouseY, 30, 0, 2*Math.PI);
        ctx.stroke();
    }
    lastpositionofX=currentpositionofmouseX;
    lastpositionofY=currentpositionofmouseY;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}