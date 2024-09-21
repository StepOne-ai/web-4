let btnElement = document.querySelector(".btn");
let myNameElement = document.querySelector('[name="myname"]');
let mySenameElement = document.querySelector('[name="mysename"]');
let resultElement = document.querySelector(".result");

btnElement.addEventListener("click", function() {
    resultElement.textContent = `Ответ: Здравствуйте, ${myNameElement.value} ${mySenameElement.value}!`
    myNameElement.value = "";
    mySenameElement.value = "";
});