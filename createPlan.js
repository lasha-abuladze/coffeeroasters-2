`use strict`;


const inputContainerArr = document.querySelectorAll(`.inputs-container`);
const inpRadioArr = document.querySelectorAll(`.inp-radio`);
const form = document.querySelector(`.order-customization-form`);
const answerSpanArr = document.querySelectorAll(`.answer-span`);



let questionNumber;
let questionAnswer;


inputContainerArr.forEach((container, i) => {
    if(i > 0) container.classList.add(`display-none`);
})


form.addEventListener(`change`, (e) => {

    if(e.target.closest(`.inp-label`)) {
            const label = e.target.closest(`.inp-label`);
            questionNumber = label.dataset.questionNumber;
            questionAnswer = label.getElementsByTagName(`h4`)[0].textContent;
    }


    answerSpanArr[questionNumber - 1].textContent = `${questionAnswer}`    
    if(inputContainerArr[questionNumber]) inputContainerArr[questionNumber].classList.remove(`display-none`);

})




