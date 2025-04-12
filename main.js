const btnToggle = document.getElementById('btnToggle');
const mobileNavbar = document.getElementById('mobile-navbar');

btnToggle.onclick = function(){
    mobileNavbar.classList.toggle('active')
}