var box = document.getElementById('box');
//element.addEventListener(event,function,useCapture);


box.addEventListener("click", function alert() {
    window.alert("Hello World!");
});
// box.addEventListener("mouseover", changeColor); //parametre gönderilemez
box.addEventListener("mouseover", function() { changeColor("red") });
box.addEventListener("mouseout", function() { changeColor("blue") });

function changeColor(color) {
    box.style.backgroundColor = color;
}


//useCapture:iç içe olan elemanlarda olayın gerçekleşme sırasını belirler 
//varsayılan değeri false olarak ayarlanmıştır.
//false değeri: child element olayı gerçekleşir sonra parent element olayı
//true değeri: parent element olayı gerçekleşir sonra child element olayı

//durdurmak için -->event.stopPropagation(); kullanılmalıdır.

var parentBox = document.getElementById("parent-box");
var childBox = document.getElementById("child-box");

parentBox.addEventListener("click", function() {
    window.alert("parent element clicked");
}, false);
childBox.addEventListener("click", function(event) {
    window.alert("child element clicked");
    event.stopPropagation();
}, false);


//eğer elemanların varsayılan olaylarını engellemek istiyorsanız -->event.preventDefault();
//her olayın engellenemeyeceğini unutmayın bunun için "cancelable" değerine bakmalısınız.
//örn:https://www.w3schools.com/jsref/event_onclick.asp

var link = document.getElementById("link");
link.addEventListener("click", function(e) {
    window.alert("a etiketine tıklandı");
    e.preventDefault();
});

//olay dinleyicisini iptal etmek için ->removeEventListener kullanılabilir
//parentBox.removeEventListener(event,functionname);