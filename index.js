let currentIndex = 0;
let varForm1 = document.getElementById("Form1");
let varForm2 = document.getElementById("Form2");
let varQuestion = document.getElementById("Question");
let varAnswer = document.getElementById("Answer");
let varHint = document.getElementById("Hint");
let varSkip = document.getElementById("Skip");
let varTheme = document.getElementById("Theme");

function ShowQuestion() {
    varQuestion.textContent = wordsData[currentIndex].question;
}
ShowQuestion()

function NextQuestion() {
    currentIndex += 1;
    varHint.textContent = "";
    ShowQuestion(); 
}

varForm1.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData1 = new FormData(varForm1);
    if (formData1.get("Answer") == wordsData[currentIndex].answer) {
        NextQuestion();  
    }
    else{
        varHint.textContent = "::" + wordsData[currentIndex].sound + "(" + wordsData[currentIndex].hint + ")";
    }
})
varForm2.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData2 = new FormData(varForm2);
    const filterData = wordsData.findIndex(item => item.kanji === formData2.get("Filter"))
    if (filterData != -1) {
        currentIndex = filterData;
        varHint.textContent = "";
        ShowQuestion();
    }
})

varSkip.addEventListener("click", () => {
    NextQuestion();
})

varTheme.addEventListener("change", () => {
    document.body.classList.toggle("darkTheme");
})