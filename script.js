//DOM ELEMENTS
const mainPage = document.querySelector('.main-page-section');
const loginPage = document.querySelector('.login-section');
const mainpageloginbutton = document.querySelector('.log-in');
const middlerightcontent = document.querySelector('.middle-right-content');
const feedsection = document.querySelector('.feed-section');
const mainpagevalidationbtn = document.querySelector('.btn-top');
const alertbox = document.querySelector('.alert');
const alerticon = document.querySelector('.fa-times');
const loginbutton = document.querySelector('.login-form-button');
const postbutton = document.querySelector('.post-button');
const modalbox = document.querySelector('.modal-wrapper');
const modalinput = document.querySelector('.modal-input');
const modalremoveicon = document.querySelector('.modal-post-header i');
const feednavuser = document.querySelector('.user');
const sidebarwrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-content');
const sidebarromove = document.querySelector('.sidebar-header i');
/** ************************************************* */
/****************************************************** */

const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}
const removeAlert = () => {
    alertbox.style.display = 'none';


}
/** */
middlerightcontent.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    } else
        console.log("user doesnot click buttons");
});
/** */
mainpagevalidationbtn.addEventListener('click', () => {
    const textinput = document.querySelector('.user-info').value;
    const passinput = document.querySelector('.password').value;



    if (textinput != '' && passinput != '') {
        mainPage.style.display = 'none';
        feedsection.style.display = 'grid';

    } else {
        goToLoginPage();
        alertbox.style.display = 'block';
    }


});
/*********** Alert Icon */
alerticon.addEventListener('click', () => {

    alertbox.style.display = 'none';

});

/*********** */
loginbutton.addEventListener('click', () => {


    const textinput = document.querySelector('.text-login-input');

    const passinput = document.querySelector('.passw-login-input');

    if (textinput.value != '' && passinput.value != '') {
        loginPage.style.display = 'none';
        feedsection.style.display = 'grid';

    } else {
        alertbox.style.display = 'block';

    }

})
//**************POST MODAL FONCTIONALITY******************************* */
const modalbutton = document.querySelector('.model-post-button');
const modalspan = document.querySelector('.modal-span');
changeOpacity = x =>{
    modalbutton.style.opacity = x;
    modalspan.style.opacity = x;

}
postbutton.addEventListener('click', () => {
    modalbox.style.display = 'block';
})

modalinput.addEventListener('keypress', (e) => {
    if (e.target.value !== '') {
        changeOpacity(1);
        
    }

})
modalinput.addEventListener('blur', (e) => {
if (e.target.value === '') {
    changeOpacity(0.5);
    
}
})
modalremoveicon.addEventListener('click', () => {
    modalbox.style.display = 'none';
    if (modalinput.value !== '') {
        modalinput.value = '';
        changeOpacity(0.5);
        
    }
   // ;
})

/** SideBar Actions */
feednavuser.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar-visibile');
    sidebarwrapper.classList.add('sidebar-wrapper-visibility');

})
sidebarromove.addEventListener('click', () =>{
    sidebar.classList.remove('sidebar-visibile');
    sidebarwrapper.classList.remove('sidebar-wrapper-visibility');
})


/*** Dark Mode */
const toggle = document.querySelector('.toggle');
const darkMod1Elements = document.querySelectorAll('.dark-mode-1');
const darkMod2Elements = document.querySelectorAll('.dark-mode-2');
const textlight = document.querySelectorAll('.light-text');
const border = document.querySelectorAll('.border');
toggle.addEventListener('click',()=>{
    console.log(Array.from(darkMod2Elements));
Array.from(darkMod1Elements).map(darkelement =>
    darkelement.classList.toggle('dark-1')
    );
    Array.from(darkMod2Elements).map(darkelement =>
        darkelement.classList.toggle('dark-2')
        );
        Array.from(textlight).map(textelement =>
            textelement.classList.toggle('light')
            );
            Array.from(border).map(borderelement =>
                borderelement.classList.toggle('border-color')
                );
        
})