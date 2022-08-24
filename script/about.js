let swiper = new Swiper('.project_container', {
    cssMode: true,
    loop: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
});

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_button-1")) {
        toggleProjectPopup1();
    }
})

function toggleProjectPopup1() {
    document.querySelector("#project_demo-1").classList.toggle("open");
}

document.querySelector(".project_demo-close-1").addEventListener("click", toggleProjectPopup1)


document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_button-2")) {
        toggleProjectPopup2();
    }
})

function toggleProjectPopup2() {
    document.querySelector("#project_demo-2").classList.toggle("open");
}

document.querySelector(".project_demo-close-2").addEventListener("click", toggleProjectPopup2)


document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_button-3")) {
        toggleProjectPopup3();
    }
})

function toggleProjectPopup3() {
    document.querySelector("#project_demo-3").classList.toggle("open");
}

document.querySelector(".project_demo-close-3").addEventListener("click", toggleProjectPopup3)

var video1 = document.getElementById("demo-video-1");
function stopVideo1(){
    video1.pause();
    video1.currentTime = 0;
}
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_demo-close-1")) {
        stopVideo1();
    }
})

var video2 = document.getElementById("demo-video-2");
function stopVideo2(){
    video2.pause();
    video2.currentTime = 0;
}
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_demo-close-2")) {
        stopVideo2();
    }
})

var video3 = document.getElementById("demo-video-3");
function stopVideo3(){
    video3.pause();
    video3.currentTime = 0;
}
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("project_demo-close-3")) {
        stopVideo3();
    }
})