/*=============== SHOW MENU ===============*/
const navClose = document.getElementById('navClose')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(n=>n.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
}))

/*=============== SHADOW HEADER ===============*/
window.addEventListener('scroll', ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
})

/*=============== SHOW SCROLL UP ===============*/ 
window.addEventListener('scroll', ()=>{
    const scrollUp = document.getElementById('scrollUp')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scrollup') : scrollUp.classList.remove('show-scrollup')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', ()=>{
    const scrollDown= window.scrollY

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-58
        const sectionId = current.getAttribute('id')
        const sectionClass = document.querySelector('.nav-menu a[href*='+ sectionId + ']')
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight ){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
})
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose

})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home-data, .join-con, .footer')
sr.reveal('.home-img', {origin: 'bottom'})
sr.reveal('.enjoy-card, .popular-vard', {interval: 150})
sr.reveal('.about-data', {origin: 'right'})
sr.reveal('.about-img', {origin: 'left'})
