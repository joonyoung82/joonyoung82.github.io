var modalLF = document.getElementById('myModalLF');
var btnLF = document.getElementById("myBtnLF");
var spanLF = document.getElementsByClassName("closeLF")[0];
btnLF.onclick = function() {
    modalLF.style.display = "block";
}
spanLF.onclick = function() {
    modalLF.style.display = "none";
}


var modalC = document.getElementById('myModalC');
var btnC = document.getElementById("myBtnC");
var spanC = document.getElementsByClassName("closeC")[0];
btnC.onclick = function() {
    modalC.style.display = "block";
}
spanC.onclick = function() {
    modalC.style.display = "none";
}


var modalK = document.getElementById('myModalK');
var btnK = document.getElementById("myBtnK");
var spanK = document.getElementsByClassName("closeK")[0];
btnK.onclick = function() {
    modalK.style.display = "block";
}
spanK.onclick = function() {
    modalK.style.display = "none";
}


var modalMH = document.getElementById('myModalMH');
var btnMH = document.getElementById("myBtnMH");
var spanMH = document.getElementsByClassName("closeMH")[0];
btnMH.onclick = function() {
    modalMH.style.display = "block";
}
spanMH.onclick = function() {
    modalMH.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalLF || event.target == modalC || event.target == modalMH || event.target == modalK) {
        modalLF.style.display = "none";
        modalC.style.display = "none";
        modalMH.style.display = "none";
        modalK.style.display = "none";
    }
}
