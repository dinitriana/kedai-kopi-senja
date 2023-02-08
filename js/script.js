// Toggle Class Active
const navbarNav = document.querySelector
('.navbar-nav');
// ketika humberger menu diklik

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');

}
// kli dluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector

('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});