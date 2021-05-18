const arrLeft = document.querySelector('.arrow__left');
const arrRigth = document.querySelector('.arrow__right');
const photoCase = document.querySelector('.case_photo');
const bilding = document.querySelector('.conten__photo_building');
const count = document.querySelector("#count");
const count1 = document.querySelector('#count1');

let nowPos = parseInt(photoCase.style.left);
const step = bilding.clientWidth;

console.log(bilding.clientWidth)

const animAct = ()=>{
    count1.classList = "animation"
    setTimeout(()=>{
        count1.classList = "";
    },500)
};

const stepUpDown = ()=>{
    if(photoCase.style.left === "0px" ){
        photoCase.style.left = `-${step-30}px`;
        count.innerHTML = "02";
        count1.classList.toggle = "animation";
        animAct();
    }else if(photoCase.style.left <= "-770px"){
        photoCase.style.left = `0px`;
        count.innerHTML = "01";
        count1.classList.toggle = "animation";
        animAct();
    }
};




arrRigth.addEventListener('click',()=>{
    stepUpDown();
});

arrLeft.addEventListener('click',()=>{
    stepUpDown();
});

