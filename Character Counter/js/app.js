const textAreaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter");
const remaininglCounterElement = document.getElementById("remaining-counter");

// show intially how much remaining text user can type
remaininglCounterElement.innerText = textAreaElement.getAttribute("maxLength");


textAreaElement.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterElement.innerText =
        textAreaElement.value.length;

    remaininglCounterElement.innerText = textAreaElement.getAttribute("maxLength") - textAreaElement.value.length;
}