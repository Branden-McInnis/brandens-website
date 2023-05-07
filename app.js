//Button
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click', function(){

    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})
//Text fade
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

//image shift

const track = document.getElementById("main-image");

window.onmousedown = e => {
    e.clientx;
}

window.onmousedown = e => {
    if(track.dataset.mouseDownAt == "0") return;
    
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientx,
    maxDelta = window.innerWidth/2;

    const percentage = (mouseDelta / maxDelta) * -100;

    track.style.transform = 'transform(${percentage}%, -50%)';
}

