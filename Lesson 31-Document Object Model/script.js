//EcmaScript5 and VanillaJS(Pure JS)

//Doküman içerisindeki elemanları bulmak
var element = document.getElementById("paragraph"); //tek eleman
var elements = document.getElementsByTagName("H1"); //çoklu eleman
var boxes = document.getElementsByClassName("box"); //çoklu eleman

console.log(element.innerText);
console.log(elements[0].innerText);
console.log(elements.item(0).innerText); //yukarıdaki ile aynı
console.log(elements[1].outerHTML);

//innerText ->HTML elemanına ait "text" kısmı gelir
//innerHTML ->HTML yorumlandıktan sonraki metin alanı gelir
//outerHTML ->ilgili elemanın html hali gelir

//İçerik değiştirmek
elements[1].innerText = "Başlık2 değişti";
elements[2].innerHTML = "<span style='color:#ff0000;'>Başık3 değişti</span>";

//Stil değiştirmek
boxes.item(0).style.width = "200px";
boxes.item(0).style.height = "200px";
boxes.item(0).style.backgroundColor = "red";
// background-color:red ->CSS tarafında;

//Sınıf ekleme
boxes.item(0).classList.add("border");
boxes.item(0).classList.add("shadow");

function shadowRemove() {
    boxes.item(0).classList.remove("shadow");
}

function shadowAdd() {
    boxes.item(0).classList.add("shadow");
}