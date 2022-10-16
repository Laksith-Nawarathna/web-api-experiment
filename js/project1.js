
const circle = document.getElementById('cursor');

let cursorX = null;
let cursorY = null;

let tmrId = null;

circle.addEventListener('mousemove', (eventData) => {

    if(tmrId){
        clearTimeout(tmrId);
        tmrId = null;
    }
    circle.style.opacity = 1;
    cursorX = eventData.pageX;
    cursorY = eventData.pageY;
    circle.style.left = `${cursorX}px`;
    circle.style.top = `${cursorY}px`;

    tmrId = setTimeout(() => {
        circle.style.opacity = 0;
    }, 2000);
    
});

document.body.addEventListener('mouseleave', () => {
    circle.style.opacity = 0;
});

document.body.addEventListener('mouseenter', () => {
    circle.style.opacity = 1;
});

function timer(){
    const tmr = setTimeout(() => {
        circle.style.opacity = 0;
    }, 3000);
}
