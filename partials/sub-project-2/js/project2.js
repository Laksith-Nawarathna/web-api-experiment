// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.innerWidth);
// console.log(window.outerWidth);

// console.log(boxElm.clientHeight, boxElm.clientWidth);

// boxElm.style.top = 0;
// boxElm.style.top = `${innerHeight - 80}px`;

/* ========================== method - 1 ===================================== */

// const boxElm = document.querySelector('#box');

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

// let x= 0;
// let startY = (innerHeight - boxElm.offsetHeight) / 2;

// setInterval(() => {
//     const y = startY + Math.sin(x++ / 180) * 250;
//     boxElm.style.top = `${y}px`;
// },5);


/* ====================== method - 3 ==================================== */
// const vH = (innerHeight - boxElm.offsetHeight);
// const vW = (innerWidth - boxElm.offsetWidth);

// const vH = (innerHeight - 60);
// const vW = (innerWidth - 60);

class Box {
    #width;
    #height;
    #dx;
    #dy;
    #elm;

    constructor() {
        this.#elm = document.createElement('div');
        this.#elm.classList.add('box');
        document.body.append(this.#elm);

        this.#height = 50 + (Math.random() * 15);
        this.#width = 50 + (Math.random() * 15);

        this.#dx = Math.random() * 10 * (Math.random() < -0.5? -1 : 1);
        this.#dy = Math.random() * 10 * (Math.random() < -0.5? -1 : 1);

        this.#elm.style.height = `${this.#height}px`;
        this.#elm.style.width = `${this.#width}px`;
        this.#elm.style.top = `${Math.random() * (innerHeight - this.#height)}px`;
        this.#elm.style.left = `${Math.random() * (innerWidth - this.#width)}px`;


        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const alpha = 0.4 + Math.random();
        this.#elm.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        this.#elm.style.borderRadius = `${Math.random() * 101}%`;
        this.#elm.style.transform = `rotate(${Math.random() * 361}deg)`;
    }

    move() {
        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0) {
            this.#dy = -this.#dy;
        } else if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetWidth <= 0) {
            this.#dx = -this.#dx;
        }

        this.#elm.style.left = `${this.#elm.offsetLeft + this.#dx}px`;
        this.#elm.style.top = `${this.#elm.offsetTop + this.#dy}px`;
    }
}

const boxes = [];
for(let i = 0; i < 50; i++){
    boxes.push(new Box());
}

setInterval(() => {
    boxes.forEach( box => box.move());
}, 20);