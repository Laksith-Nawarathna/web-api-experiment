const stringArray = ['Hi, I\'m Eranga Bandara ',
                     'a full stack developer from Sri Lanka',
                    'erangab@yahoo.com'];


// const paper = document.querySelector('#output');
const text = document.querySelector('#text');


// console.log(stringArray.length);
// paper.innerText = stringArray[0][3];
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


// setInterval(() => {
//     let character = stringArray[sentenceIndex][charIndex++];
//     if(character === ' '){
//         paper.innerText = paper.innerText + '_';
//     }
//     if(character === undefined){
//         paper.innerText = "";
        
//         sentenceIndex++;
//         charIndex = 0;
//         character = stringArray[sentenceIndex][charIndex++];
//     }
//     paper.innerText = paper.innerText + character;
//     if(sentenceIndex > stringArray.lenth){
//         sentenceIndex = 0;
//     }
//     if(charIndex > stringArray[sentenceIndex].length){
//         sentenceIndex++;
//         charIndex = 0;
//     }
// },100);
