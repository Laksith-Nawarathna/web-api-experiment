
const cursor = document.querySelector('#cursor');
const cursorRadius = cursor.clientWidth / 2;


let cursorX;
let cursorY;


let tmrId = null;


// console.log(cursorXpos(), cursorYpos());

class Box {
    #width;
    #height;
    dx;
    dy;
    #elm;
    #posTop;
    #posLeft;

    constructor() {
        this.#elm = document.createElement('div');
        this.#elm.classList.add('box');
        document.body.append(this.#elm);

        this.#height = 50 + (Math.random() * 15);
        this.#width = 50 + (Math.random() * 15);

        // this.#height = 50;
        // this.#width = 50;

        this.dx = Math.random() * 10 * (Math.random() < -0.5 ? -1 : 1);
        this.dy = Math.random() * 10 * (Math.random() < -0.5 ? -1 : 1);

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
        // this.#elm.style.borderRadius = `${100}%`;
        this.#elm.style.transform = `rotate(${Math.random() * 361}deg)`;
    }

    move() {
        if (this.#elm.offsetTop >= (innerHeight - this.#height) || this.#elm.offsetTop <= 0) {
            this.dy = -this.dy;
        } else if (this.#elm.offsetLeft >= (innerWidth - this.#width) || this.#elm.offsetLeft <= 0) {
            this.dx = -this.dx;
        }

        let x1 = this.#elm.left;
        let y1 = this.#elm.offsetTop;

        this.#posTop = this.#elm.offsetLeft + this.dx;
        this.#posLeft = this.#elm.offsetTop + this.dy;

        this.#elm.style.left = `${this.#posTop}px`;
        this.#elm.style.top = `${this.#posLeft}px`;

    }

    // radius() {
    //     return this.#height / 2;
    // }

    // positionX() {
    //     return this.#posLeft;
    // }

    // positionY() {
    //     return this.#posTop;
    // }
}

const boxes = [];
for(let i = 0; i < 50; i++){
    boxes.push(new Box());
}

setInterval(() => {
    boxes.forEach( box => box.move());
}, 20);

// const marble = new Box();

// console.log(marble.radius());

// setInterval(() => {
//     marble.move();
//     if(marble.radius() + cursorRadius)
//     console.log(marble.positionX());
//     console.log(marble.positionY() + marble.radius());


// }, 20);






// cursor.addEventListener('mousemove', (eventData) => {

//     if (tmrId) {
//         clearTimeout(tmrId);
//         tmrId = null;
//     }
//     circle.style.opacity = 1;
//     cursorX = eventData.pageX;
//     cursorY = eventData.pageY;
//     circle.style.left = `${cursorX}px`;
//     circle.style.top = `${cursorY}px`;

//     function cursorXpos(){
//         return cursorX;
//     }

//     function cursorYpos(){
//         return cursorY;
//     }

//     tmrId = setTimeout(() => {
//         circle.style.opacity = 0;
//     }, 2000);

//     // console.log(marble.positionX());

//     // var p = (cursorX - marble.positionX()) ** 2 + (cursorY - marble.positionY()) ** 2;
//     // var q = (cursorRadius + marble.radius()) ** 2;

//     // dx = Math.random() * 10 * (Math.random() < -0.5 ? -1 : 1);
//     // dy = Math.random() * 10 * (Math.random() < -0.5 ? -1 : 1);
//     // // console.log(p, q);
//     // console.log(dx, dy);
//     // function sweep() {
//     //     if (p <= q) {
//     //         marble.dx = -dx;
//     //         marble.dy = -dy;
//     //         marble.style.left = `${marble.offsetLeft + dx}px`;
//     //         marble.style.top = `${marble.offsetTop + dy}px`;
//     //     }
//     // }

//     // sweep();


// });

// console.log(cursorX, cursorY);