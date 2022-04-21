const featureBtn = document.querySelector('.fea-btn')
const companyBtn = document.querySelector('.com-btn')
const ul = document.querySelector('ul')


featureBtn.addEventListener('click', () => {
    ul.classList.toggle('ul')
})

companyBtn.addEventListener('click', () => {
    ul.classList.toggle('ul-2')
})