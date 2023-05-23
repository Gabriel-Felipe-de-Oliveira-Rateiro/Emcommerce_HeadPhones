function slider(anything) {

    document.querySelector('.one') .src = anything;


};

let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navBar.classList.toggle('open');

}