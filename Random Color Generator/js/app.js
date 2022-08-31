const containerElement = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerElement = document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement)
}

const colorContainerElements = document.querySelectorAll(".color-container");

generatorColors();

function generatorColors() {
    colorContainerElements.forEach((colorBox) => {
        const newColorCode = randomColor();
        colorBox.style.backgroundColor = `#${newColorCode}`
        colorBox.innerText = `#${newColorCode}`
    });
}

function randomColor() {
    const charSet = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++) {
        const random = Math.floor(Math.random() * charSet.length);
        colorCode += charSet.substring(random, random + 1);
    }
    return colorCode;
}