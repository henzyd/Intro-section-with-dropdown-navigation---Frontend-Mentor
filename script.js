'use strict';

const featureBtn = document.querySelector('.fea-btn')
const companyBtn = document.querySelector('.com-btn')
const fcca = document.querySelector('.fcca')

const closedMenuBtn = document.querySelector('.closed-menu')
const openMenuBtn = document.querySelector('.open-menu')


///////// Mobile
const mobileOverlay = document.querySelector('.mobile-overlay')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuContents = document.querySelector('.mobile-menu-contents')
const mobileFeatureBtn = document.querySelector('.mobile-fea-btn')
const mobileFeature = document.querySelector('.mobile-feature')
const mobileCompany = document.querySelector('.mobile-company')
const mobileCompanyBtn = document.querySelector('.mobile-com-btn')




featureBtn.addEventListener('click', () => {
    fcca.classList.toggle('ul')
})

companyBtn.addEventListener('click', () => {
    fcca.classList.toggle('ul-2')
})



///////// Mobile
openMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu_invisible')
    mobileOverlay.classList.remove('mobile-menu_invisible')
    closedMenuBtn.classList.remove('mobile-menu_invisible')
    openMenuBtn.classList.add('mobile-menu_invisible')
    // mobileMenuContents.classList.remove('mobile-menu_invisible')
})

closedMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu_invisible')
    mobileOverlay.classList.add('mobile-menu_invisible')
    openMenuBtn.classList.remove('mobile-menu_invisible')
    closedMenuBtn.classList.add('mobile-menu_invisible')
})

let MFB = true;
mobileFeatureBtn.addEventListener('click', () => {
    if (MFB === true) {
        mobileFeature.style.display = 'none'
        MFB = false
    } else {
        mobileFeature.style.removeProperty('display')
        MFB = true
    }
})

let MFB2 = true;
mobileCompanyBtn.addEventListener('click', () => {
    if (MFB2 === true) {
        mobileCompany.style.display = 'none'
        MFB2 = false
    } else {
        mobileCompany.style.removeProperty('display')
        MFB2 = true
    }
})

function btn() {
    mobileFeature.style.display = 'none'
    MFB = false
    mobileCompany.style.display = 'none'
    MFB2 = false
}

