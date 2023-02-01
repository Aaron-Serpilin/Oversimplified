/*Background loop*/
let curImg = 1;
let BackgroundImages = document.querySelectorAll(".BackgroundImages img");
    setInterval(function() {
        let prevImg = curImg? curImg-1: BackgroundImages.length-1;

        BackgroundImages[prevImg].style.opacity = 0;
        BackgroundImages[curImg].style.opacity = 100;
        curImg++;

        if (curImg >= BackgroundImages.length) {
            curImg = 0;
        }
}, 8000);




