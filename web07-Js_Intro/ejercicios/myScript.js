function saludar() {
    alert("Ya casi nos vamos al segundo descanso");
}
function color() {
    document.body.style.backgroundColor = 'lightblue';
}
function bodyColor( color ){
    document.body.style.backgroundColor = color;
}
function changeToGreenColor(){
    const element = document.getElementById("green-paragraph");
    console.log(element);
    element.style.color= "green";
}
function changeColor(element, color){
    element.style.color = color;
}
(function setUp(){
    document.getElementById("title").style.color = "blue";
    document.getElementById("title").style.fontSize = "50px";
})();