var display = document.getElementById("display");

function foam(value) {
    display.value += value;
}

function cleardisplay() {
    display.value = "";

}

function calculate() {
    display.value = eval(display.value)
}

function foam(value) {
    let lastChar = display.value.slice(-1);
    if ((lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') &&
        (value === '+' || value === '-' || value === '*' || value === '/')) {
        display.value = display.value.slice(0, -1) + value;
    } else {
        display.value += value;
    }
}
