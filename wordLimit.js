/*100 word limit*/
const question = document.querySelector("#question");
const errorMessage = document.querySelector(".longQuestion");

function lessThan100() {
    const questionWords = question.value.split(" ");
    if (questionWords.length > 100) {
        errorMessage.style.display = "block";
        question.style.border = "1px solid red";
        question.value = questionWords.slice(0, 100).join(" ");
    } else {
        errorMessage.style.display = "none";
        question.style.border = "1px solid black";
    }
}
      
question.addEventListener("input", lessThan100);
