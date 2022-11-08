var button = document.querySelector(".custom-btn.btn-12")
var blockBtn = document.querySelector(".block-btn")
var heartLoader = document.querySelector(".heart-loader")
button.onclick = function(){
    blockBtn.classList.remove('open');
    heartLoader.classList.add("open")
};