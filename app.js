const boxContainer = document.querySelector(".main-container");
const submitContainer = document.querySelector(".submit");
const submitButton = document.getElementById("submit");
const rateButton = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".click");

submitButton.addEventListener("click", () => {
    submitContainer.classList.remove("hidden")
    boxContainer.style.display = "none"
})

rateButton.addEventListener("click", () => {
    submitContainer.classList.add("hidden")
    boxContainer.style.display = "block"
})

rates.forEach((rate) => {
 rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
 })
})