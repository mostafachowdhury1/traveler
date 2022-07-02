const searcbtn=document.querySelector('#searchicon')

const searchBar=document.querySelector(".search-bar-container")
const logInBtn=document.querySelector('#user')
const closeBtn=document.querySelector('#close')
const loginContainer=document.querySelector('.login-from-container')
const menu=document.querySelector('#manubar')
const navbar=document.querySelector('.navbar')

const videoBtn=document.querySelectorAll('.vid-btn') 

window.onscroll=()=>{
    searcbtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
}
searcbtn.addEventListener('click',()=>{
   searcbtn.classList.toggle('fa-times')
   searchBar.classList.toggle('active')
})

logInBtn.addEventListener('click',()=>{
    loginContainer.classList.add('active')
})

closeBtn.addEventListener('click',()=>{
    loginContainer.classList.remove('active')
})



menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})


videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')
        let src=btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
})



var swiper = new Swiper(".reviw-slider", {
    spaceBetween:20,
    loop:true,
  autoplay:{
    delay:850,
    disableOnInteraction:false,
  },

 breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
    1024:{
        slidesPerView:3,
    },
 }


});



var swiper = new Swiper(".barnd-slider", {
    spaceBetween:20,
    loop:true,
  autoplay:{
    delay:850,
    disableOnInteraction:false,
  },

 breakpoints:{
    640:{
        slidesPerView:1,
    },
    768:{
        slidesPerView:2,
    },
    1024:{
        slidesPerView:6,
    },
 }


});


