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



    //Displaying contact form on click of contact me button

    const contactBtn = document.querySelector('.btn_contact_me');

    contactBtn.addEventListener('click', ()=>{

    const contactForm = document.querySelector('.contact_me_form_div');
   const currentDisplay = window.getComputedStyle(contactForm).display;

    if(currentDisplay === 'none') {
        contactForm.style.display = 'flex';
    } 
    else {
        console.log('Contact form is already displayed');
    }
    });

    /* Undisplaying contact form on cancel */

    const resetBtn  = document.querySelector('.contacts_reset');

        resetBtn.addEventListener('click', ()=>{
            const contactForm = document.querySelector('.contact_me_form_div');
   const currentDisplay = window.getComputedStyle(contactForm).display;

            if(currentDisplay=== 'flex') {
                contactForm.style.display = 'none';
            }
            else {
                console.log('Contact form is already hidden');
            }
        });