const inputSize = document.querySelector('input#font-size-control');
const spanText = document.querySelector('span#text');

spanText.style.fontSize = inputSize.value + "px";

inputSize.addEventListener("input", event => {
    spanText.style.fontSize = `${event.currentTarget.value}px`
})



