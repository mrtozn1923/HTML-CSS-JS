var boxNumber = 3; //her seferinde tekrar 3 atanmasın diye dışarı alındı
var boxWrapper = document.getElementById("box-wrapper"); //çoklu erişim var


function createBox() {
    boxNumber++; //boxNumber=boxNumber+1
    var box = document.createElement("div");
    var textNode = document.createTextNode(boxNumber.toString());
    box.appendChild(textNode);
    box.classList.add("box");

    boxWrapper.appendChild(box);

    //istenilen yere eleman ekleme
    // var selectedBox = document.getElementsByClassName("box").item(2);
    // boxWrapper.insertBefore(box, selectedBox);
}

function removeBox() {
    //ekrandaki mevcut kutu sayısı
    var boxCount = document.getElementsByClassName("box").length;
    //sondaki kutuya erişim
    var lastBox = document.getElementsByClassName("box").item(boxCount - 1);
    //index numarası ile erişirken 1 eksiği olması gerekiyor
    if (lastBox != null) {

        // lastBox.remove(); //modern tarayıcılarda geçerli işlem

        //eski tarayıcılarda removeChild metodu kullanılmaktadır
        //önce parent element bulunur sonrasında silinecek eleman parametre olarak verilir
        boxWrapper.removeChild(lastBox);
    } else {
        window.alert("Silinecek Kutu Yok");
    }
}

function updateBox() {
    //ekrandaki mevcut kutu sayısı
    var boxCount = document.getElementsByClassName("box").length;
    //sondaki kutuya erişim
    var lastBox = document.getElementsByClassName("box").item(boxCount - 1);

    if (lastBox != null) {
        //yeni eklenecek eleman
        boxNumber++;
        var newBox = document.createElement("div");
        var textNode = document.createTextNode(boxNumber.toString());
        newBox.appendChild(textNode);
        newBox.classList.add("box");
        //yeni eleman ile eski eleman yer değiştiriyor(güncelleme)
        boxWrapper.replaceChild(newBox, lastBox);
    } else {
        window.alert("Güncellenecek Kutu Yok");
    }

}