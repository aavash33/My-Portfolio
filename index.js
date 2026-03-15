/* VIEW PROJECT BUTTON */
const view_project_button =document.querySelector('.btn_view_project');


function view_project_button_func(){
window.location.href='https://github.com/aavash33/';
}

view_project_button.addEventListener("click", view_project_button_func);


/* STYLING HAM BAR */

const hamMenu = document.querySelector('.ham-menu');
const offScreenMenus = document.querySelector('.off-screen-menus');

hamMenu.addEventListener('click', ()=>{
    hamMenu.classList.toggle('active');
    offScreenMenus.classList.toggle('active');


    //Change of hamMenu position based on active status

     if(hamMenu.classList.contains('active')) {
        hamMenu.style.position = 'fixed';
    } else {
        hamMenu.style.position = 'absolute';
    }
});

