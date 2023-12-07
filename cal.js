let string = " ";
let display = document.getElementsByClassName('displayRow')[0].querySelector('input');
let buttons = document.querySelectorAll(".btn");
let click = document.getElementById("click");

// toggle js
let switchState = 0;

function toggleSwitch() {
    const toggleElement = document.querySelector('.toggle');

    switch (switchState) {
        
        case 0:
            toggleElement.style.transform = 'translateX(30px)';
            document.body.classList.toggle("secondCss");
            break;
        case 1:
            toggleElement.style.transform = 'translateX(60px)';
            document.body.classList.toggle("thirdCss");
            break;
        case 2:
            toggleElement.style.transform = 'translateX(30px)';
            document.body.classList.toggle("thirdCss");
            break;
            case 3:
                toggleElement.style.transform = 'translateX(0)';
                document.body.classList.remove("thirdCss", "secondCss");
                break;
    }

    switchState = (switchState + 1) % 4;
}



// calculator functionality

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleButtonClick(e.target.innerHTML);
    });
});

// Listen for keyboard events
document.addEventListener('keydown', (e) => {
    const key = e.key;
    handleKeyPress(key);
});

function handleButtonClick(key) {
    handleKeyPress(key);
}

function handleKeyPress(key) {
    if (key === '=' || key === 'Enter') {
        string = eval(string);
        display.value = string;
    } else if (key === 'RESET' || key === 'Delete') {
        string = " ";
        display.value = string;
    } else if (key === 'DEL' || key === 'Backspace') {
        string = string.slice(0, -1);
        display.value = string;
    } else {
        // Check if the key pressed is a number or an operator
        if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/') {
            string = string + key;
            display.value = string;
            console.log(string);
        }
    }
}
