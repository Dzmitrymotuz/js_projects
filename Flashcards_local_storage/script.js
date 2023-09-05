const flashcards = document.getElementsByClassName("flashcards")[0]
const createBox = document.getElementsByClassName("create-box")[0]
const question = document.getElementById("question")
const answer = document.getElementById("answer")
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function delFlashCards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function hideCreateBox(){
    createBox.style.display = 'none';
}
function showCreateCardBox(){
    createBox.style.display = 'block';
}

contentArray.forEach(divMaker);

function divMaker(text){
    // RD: creates div and q+a
    var div = document.createElement("div");
    var h2_question = document.createElement('h2')
    var h2_answer = document.createElement('h2')
    div.className = 'flashcard';

    // RD: applies styles to those newerly created divs
    h2_question.setAttribute('style', 'text-align: left; border-top:1px solid red; padding: 15px; margin-top: 30px');
    h2_question.innerHTML = text.my_question;

    h2_answer.setAttribute('style', 'text-align: center; display: none; color: red');
    h2_answer.innerHTML = text.my_answer;

    // RD: attaches two childs (q, a) to current div
    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    // RD: shows answer on click
    div.addEventListener('click', function(){
        if(h2_answer.style.display == 'none')
            h2_answer.style.display = 'block';
        else
            h2_answer.style.display = 'none';
    })

    flashcards.appendChild(div);
}
function addFlashCard(){
    // RD: get the text values of the user input from the 'create' card
    var flashcard_info = {
        'my_question' : question.value,
        'my_answer' : answer.value
    }
    // RD: adds those values to the array
    contentArray.push(flashcard_info);
    // RD: adds those text values as strings to local storage with the key 'items'
    localStorage.setItem('items', JSON.stringify(contentArray));
    // RD: creates a div in html file with the latest data (question + answer)
    divMaker(contentArray[contentArray.length -1]);
    // RD: resets the html values back to empty strings afetr clicking 'save'
    question.value = '';
    answer.value = '';
}