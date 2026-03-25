`use strict`;


const inputContainerArr = Array.from(document.querySelectorAll(`.inputs-container`));
const inpRadioArr = Array.from(document.querySelectorAll(`.inp-radio`));
const form = document.querySelector(`.order-customization-form`);
const answerSpanArr = document.querySelectorAll(`.answer-span`);
const asideListLi = document.querySelectorAll(`.aside-li`);
const btnCreatePlan = document.querySelector(`.btn-create-plan`);

const summary = document.querySelector(`.order-summary`);
const bodyBackground = document.querySelector(`.body-background`);

// const orderSummaryText = document.querySelector(`.order-summary-main-text`);
const summaryText = document.querySelector(`.summary-text`);


const summarySubText = document.querySelector(`.order-summary-sub-text`);


const btnCheckout = document.querySelector(`.btn-checkout`);






let questionNumber;
let questionAnswer;
let indexOfLi;


inputContainerArr.forEach((container, i) => {
    if(i > 0) container.classList.add(`display-none`);
})



form.addEventListener(`change`, (e) => {

    if(e.target.closest(`.inp-label`)) {
        const label = e.target.closest(`.inp-label`);
        questionNumber = label.dataset.questionNumber;
        questionAnswer = label.getElementsByTagName(`h4`)[0].textContent;
        
        asideListLi.forEach(li => {
            li.style.opacity =  `0.5`
        })

        indexOfLi = Number(inputContainerArr.indexOf(label.closest(`.inputs-container`)));
        asideListLi[indexOfLi].style.opacity = `1`;
    }


    answerSpanArr[questionNumber - 1].textContent = `${questionAnswer}`    
    if(inputContainerArr[questionNumber]) inputContainerArr[questionNumber].classList.remove(`display-none`);

})

btnCreatePlan.addEventListener(`click`, function() {
    summary.classList.remove(`display-none`);
    bodyBackground.classList.remove(`display-none`);
    summaryText.classList.add(`order-summary-main-text`)

    summary.insertBefore(summaryText, summarySubText)
})

btnCheckout.addEventListener(`click`, function() {
    summary.classList.add(`display-none`);
    bodyBackground.classList.add(`display-none`)
})




