"use strict";

const closeOpenBtnsContainer = document.querySelector(`.close-open-btns`);
const BtnCloseNav = document.querySelector(`.close-navigation-btn`);
const BtnOpenNav = document.querySelector(`.open-navigation-btn`);
const navigation = document.querySelector(`.main-navigation`);
const body = document.body;

// const btnCreatePlanArr = document.querySelectorAll(`.btn-create-plan`);


const closeOpenBtnsArr = [BtnCloseNav, BtnOpenNav]


closeOpenBtnsContainer.addEventListener(`click`, (e) => {


    if(e.target.closest(`.btn-gen`)) {

        closeOpenBtnsArr.forEach(el => {
            el.classList.toggle(`display-none`)
        });

        navigation.classList.toggle(`display-none`);

        if(BtnOpenNav.classList.contains(`display-none`)) {

            body.style.overflow = `hidden`;
        } else {
            body.style.overflow = `visible`;
        }
    }


})

// btnCreatePlanArr.forEach(el => {
//     el.addEventListener(`click`, () => {
//         window.open()
//     })
// })

