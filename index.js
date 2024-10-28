let currentIndex = 0;
let varForm1 = document.getElementById("Form1");
let varForm2 = document.getElementById("Form2");
let varQuestion = document.getElementById("Question");
let varAnswer = document.getElementById("Answer");
let varHint = document.getElementById("Hint");
let varSkip = document.getElementById("Skip");
let varTheme = document.getElementById("Theme");
let varCurrent = document.getElementById("Current");

function ShowQuestion() {
    varQuestion.textContent = wordsData[currentIndex].question;
}
ShowQuestion()

function NextQuestion() {
    currentIndex += 1;
    varHint.textContent = "";
    varCurrent.textContent = '今の漢字:: "' + wordsData[currentIndex].kanji + '"';
    ShowQuestion(); 
}

varForm1.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData1 = new FormData(varForm1);
    if (formData1.get("Answer") == wordsData[currentIndex].answer) {
        NextQuestion();
    }
    else{
        varHint.textContent = "::" + wordsData[currentIndex].sound + "(" + wordsData[currentIndex].hint + ")";
    }
    varForm1.reset();
})

varForm2.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData2 = new FormData(varForm2);
    const filterData = wordsData.findIndex(item => item.kanji === formData2.get("Filter")) - 1;
    if (filterData > -2) {
        currentIndex = filterData;
        NextQuestion();
    }
    varForm2.reset();
})

varSkip.addEventListener("click", () => {
    NextQuestion();
})

varTheme.addEventListener("change", () => {
    document.body.classList.toggle("darkTheme");
})
