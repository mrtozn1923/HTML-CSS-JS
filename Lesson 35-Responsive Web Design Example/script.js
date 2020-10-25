var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementsByTagName("nav").item(0);
btnMenu.addEventListener("click", function() {

    if (nav.style.display != "none") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

});