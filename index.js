const vid = document.querySelector('.vid')

window.onscroll = function(){

    let nav = document.querySelector("header")
    if (window.scrollY > 0){
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

vid.addEventListener('mousedown', function(e){
    vid.paused = true;
    vid.muted = false;
})





