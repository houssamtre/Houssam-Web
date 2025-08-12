// add class active to header on scroll



let header = document.querySelector("header")



window.onscroll = function(){

    if (this.scrollY >= 50) {

        header.classList.add("active")

    }else{

        header.classList.remove("active")

    }

}



let nav_links = document.getElementById("links");



function Open_colose_Menu() {

    nav_links.classList.toggle("active")

}



const toggleButton = document.getElementById("theme-toggle");

const body = document.body;

const icon = toggleButton.querySelector("i");



toggleButton.addEventListener("click", () => {

    body.classList.toggle("light-mode");



    if (body.classList.contains("light-mode")) {

        icon.classList.replace("fa-moon", "fa-sun"); // تبديل الأيقونة إلى الشمس

    } else {

        icon.classList.replace("fa-sun", "fa-moon"); // تبديل الأيقونة إلى القمر

    }

});



