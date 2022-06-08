let hamburger = document.querySelector('.hamburger'); //Переменная в которую попала кнопка с классом гамбургер.
let nav = document.querySelector("nav");
let homeLink = document.querySelector(".home-link");






hamburger.onclick = function(){ //При нажатии на кнопку запускается функция.
    hamburger.classList.toggle("hamburger_active"); //Переключаем класс(если нету добовляем,если есть удоляем).
    nav.classList.toggle("nav_active");
}
homeLink.onclick = function(){
    hamburger.classList.remove("hamburger_active"); //
    nav.classList.remove("nav_active");
}