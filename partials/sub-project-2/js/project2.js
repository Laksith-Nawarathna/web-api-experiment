// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);

const boxElm = document.querySelector('#box');
// console.log(boxElm.clientHeight, boxElm.clientWidth);

boxElm.style.top = 0;
// boxElm.style.top = `${innerHeight - 80}px`;

/* ========================== method - 1 ===================================== */

// let y = 0;
// let x =0;
// let up = false;
// let con = false;

// setInterval(() => {
//     boxElm.style.top = `${y}px`;
//     boxElm.style.left = `${x}px`;
//     y += !up ? 10 : -10;
//     x += !con ? 10 : -10;
//     if(y + boxElm.offsetHeight >= innerHeight){
//         up = true;
//     }else if(y <= 0){
//         up = false;
//     }else if(x + boxElm.offsetWidth >= innerWidth){
//         con = true;
//     }else if(x <= 0){
//         con = false;
//     }
// },50);


/* ======================== methos - 2 ============================== */

let x= 0;
let startY = (innerHeight - boxElm.offsetHeight) / 2;

setInterval(() => {
    const y = startY + Math.sin(x++ / 180) * 250;
    boxElm.style.top = `${y}px`;
},5);

