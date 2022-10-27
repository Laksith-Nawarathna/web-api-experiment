const stringArray = ['Hi, I\'m Eranga Bandara ',
                     'a full stack developer from Sri Lanka',
                     'Contact me ->',
                     'https://www.linkedin.com/in/eranga-bandara-75667b15a/',
                    'erangab@yahoo.com'];


const text = document.querySelector('#text');

let sentenceIndex = 0;
let charIndex = 1;
let erase = false;

const typeText = () => {
    if(!erase){
        text.innerText = stringArray[sentenceIndex].substring(0, charIndex++);
        if(charIndex === (stringArray[sentenceIndex].length +15)){
            charIndex == stringArray.length;
            erase = true;
        }
    }
};

const eraseText = () => {
    if(erase){
        text.innerText = stringArray[sentenceIndex].substring(0, charIndex--);
        if(charIndex === 0){
            erase = false;
            sentenceIndex++;
            if(sentenceIndex === stringArray.length){
                sentenceIndex = 0;
            }
        }
    }
};


let t1 = 0, t2 = 0;

function animateText(timestamp){
    if(!t1) t1 = timestamp;
    if(!t2) t2 = timestamp;

    const diff1  = timestamp - t1;
    const diff2  = timestamp - t2;

    if(diff1 >= 75){
        t1 = timestamp;
        typeText();
    }
    if(diff2 >= 15){
        t2 = timestamp;
        eraseText();
    }

    requestAnimationFrame(animateText);
}

requestAnimationFrame(animateText);
