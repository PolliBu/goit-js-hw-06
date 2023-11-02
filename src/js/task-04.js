let value = 0;
const valueGet = document.getElementById('value')
const btnDescr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');


const clickBtnDescr = (event) => {
     value -= 1;
    valueGet.textContent = value;
};

const clickBtnIncr = (event) => {
    value += 1;
    valueGet.textContent = value;
};

btnDescr.addEventListener('click', clickBtnDescr);
btnIncr.addEventListener('click', clickBtnIncr);