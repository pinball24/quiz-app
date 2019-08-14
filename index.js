'use strict';

const STORE = [
    {
       number: 1,
       text: `What season did the red wedding take place in?`,
       answer1: `Season 1`,
       answer2: `Season 3`,
       answer3: `Season 5`,
       answer4: `Season 7`,
       logo: `https://www.bing.com/th?id=OIP.dVbLt0VTRcvs9mllh2a1ygHaLI&pid=Api&rs=1`,
        alt: `Robb Stark getting killed`
    },

    {
        number: 2,
        text: `What is Jon Snow's real name?`,
        answer1: `Ned Stark`,
        answer2: `Robert Baratheon`,
        answer3: `Aegon Targaryen`,
        answer4: `Rhaegar Targaryen`,
        logo: `https://www.bing.com/th?id=OIP.af1Aid64cqEKoIOBgCPxtQHaJO&pid=Api&rs=1`,
        alt: `A picture of Jon Snow`
    },

    {
        number: 3,
        text: `What is the name of Arya's sword?`,
        answer1: `Pointy`,
        answer2: `Ice`,
        answer3: `Needle`,
        answer4: `Stabby`,
        logo: `https://images.ontheedgebrands.com/images/D45-JL2010.jpg`,
        alt: `Arya with Needle`
    },

    {
        number: 4,
        text: `Who had molten gold poured over there head?`,
        answer1: `Tony Blackburn`,
        answer2: `The Hound`,
        answer3: `Gregor Clegane`,
        answer4: `Viserys Targaryen`,
        logo: `https://awoiaf.westeros.org/images/thumb/2/2f/HBOGolden_Crown.png/350px-HBOGolden_Crown.png`,
        alt: `Gold poured over Viserys Targaryen`
    },

    {
        number: 5,
        text: `What's house Stark's motto?`,
        answer1: `Winter is coming`,
        answer2: `Hear me roar`,
        answer3: `We do not sow`,
        answer4: `Fire and blood`,
        logo: `https://maxichimaximind.files.wordpress.com/2014/04/game-of-thones-stark-banner.png`,
        alt: `Stark's direwolf sigil`
    },

    {
        number: 6,
        text: `Who is know as "The Kingslayer"?`,
        answer1: `Arya Stark`,
        answer2: `Robert Bartheon`,
        answer3: `Jamie Lannister`,
        answer4: `Jon Snow`,
        logo: `https://i.ytimg.com/vi/bDPIBgKQOD0/maxresdefault.jpg`,
        alt: `Picture of Jamie Lannister`
    },

    {
        number: 7,
        text: `Which character said "When you play the game of thrones, you win or you die."?`,
        answer1: `Cersei Lannister`,
        answer2: `Tyrion Lannister`,
        answer3: `Robb Stark`,
        answer4: `Olenna Tyrell`,
        logo: `https://www.bing.com/th?id=OIP.ttKw_JyjEaimLA2ZatEp0QHaEK&pid=Api&rs=1`,
        alt: `Picture of Cersei Lannister in garden with Ned Stark`
    },

    {
        number: 8,
        text: `What was the name of Jon Snow's direwolf?`,
        answer1: `Summer`,
        answer2: `Ghost`,
        answer3: `Shaggydog`,
        answer4: `Nymeria`,
        logo: `http://watchersonthewall.com/wp-content/uploads/2018/09/ghost-game-of-thrones-season-six.png`,
        alt: `Picture of direwolf Ghost`
    },

    {
        number: 9,
        text: `Which territory is Mance Rayder recognized as king?`,
        answer1: `Winterfell`,
        answer2: `Beyond the wall`,
        answer3: `King's Landing`,
        answer4: `The iron islands`,
        logo: `http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/mance.jpg`,
        alt: `picture of Mance Rayder`
    },

    {
        number: 10,
        text: `In the series finale, who ends up becoming the king or queen?`,
        answer1: `Jon Snow`,
        answer2: `Jamie Lannister`,
        answer3: `Sansa Stark`,
        answer4: `Bran Stark`,
        logo: `https://timedotcom.files.wordpress.com/2019/05/game-of-thrones-s8-e6-sansa-arya-bran-jon.jpeg`,
        alt: `photo of Stark family`
    }
];

const ANSWERS = [
    `Season 3`,
    `Aegon Targaryen`,
    `Needle`,
    `Viserys Targaryen`,
    `Winter is coming`,
    `Jamie Lannister`,
    `Cersei Lannister`,
    `Ghost`,
    `Beyond the wall`,
    `Bran Stark`
];

let questionNumber = 1;
let score = 0;

function generateQuestion() {
        return `
<section class="question">
 <h2>${STORE[questionNumber - 1].text}</h2>
    <form>
        <fieldset>
            <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber - 1].answer1}" name="answer" required>
                <span>${STORE[questionNumber - 1].answer1}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber - 1].answer2}" name="answer" required>
                <span>${STORE[questionNumber - 1].answer2}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber - 1].answer3}" name="answer" required>
                <span>${STORE[questionNumber - 1].answer3}</span>
               </label>
            <label class="answerOption">
                <input type="radio" value="${STORE[questionNumber - 1].answer4}" name="answer" required>
                <span>${STORE[questionNumber - 1].answer4}</span>
            </label>
            <button type="submit" class="submitButton">Submit</button>
           </fieldset>
       </form>
    </section>`;
}

function handleStartButton() {
    $('.js-start-quiz').on('click', '#start-button', function(event) {
        $('.js-start-quiz').remove();
        $('questionNumber').text(1);
        $('.question-form').css('display', 'flex');
        $('.knowledge').css('display', 'flex');
        nextQuestion();
    });
}

function nextQuestion() {
    $('.questionNumber').text(questionNumber);
    $('.question-form').html(generateQuestion());
}

function checkAnswer(answer) {
    if(answer === ANSWERS[questionNumber - 1]) {
        return true;
    } else {
        return false;
    }
}

function handleSubmitButton() {
    $('body').on('click', '.submitButton', function (event) {
        event.preventDefault();
        const answer = $('input:checked').val(); 
        console.log(answer);
        const isUserCorrect = checkAnswer(answer);
 
        if(isUserCorrect) {
            renderCorrectFeedback();
            score++
            $('.score').text(score);
        } else {
            renderWrongFeedback();
        }
    });
}

function correctFeedbackTemplate() {
    return `
    <section class="feedback-page">
        <img src="${STORE[questionNumber - 1].logo}" alt="${STORE[questionNumber -1].alt}"/>
        <p>You got it correct!</p>
        <button class="nextButton" type="button">Next</button>
    </section>
 `;
}

function incorrectFeedbackTemplate() {
    return `
    <section class="feedback-page">
        <img src="${STORE[questionNumber - 1].logo}" alt="${STORE[questionNumber - 1].alt}"/>
        <p>Sorry you got it wrong! The correct answer is ${STORE[questionNumber - 1]}</p>
        <button class="nextButton" type="button">Next</button>
    </section>
 `;
}

function renderCorrectFeedback() {
    $('.question-form').html(correctFeedbackTemplate(questionNumber));
}

function renderWrongFeedback() {
    $('.question-form').html(incorrectFeedbackTemplate(questionNumber));
}

function correctResultsTemplate() {
    return `
    <section class="feedback-page">
        <h3>Congratulations, you got a passing score!!!</h3>
        <img src="https://www.bing.com/th?id=OIP.48OsX-3NJ_ThHfwzAsBorQHaEK&pid=Api&rs=1" alt="Ned Stark on the iron throne">
        <p>You got ${score}/10 correct</p>
        <button class="restartButton" type="button">Restart Quiz!</button>
    </section>`
}

function incorrectResultsTemplate() {
    return `
    <section class="feedback-page">
        <h3>Sorry, you got a failing score</h3>
        <img src="http://static4.businessinsider.com/image/574265dadd08953f7a8b4613-2000-1125/night%20king%20close%20up%20hardhome%20game%20of%20thrones%20helen%20sloan%20hbo.jpeg.jpg" alt="Night King">
        <p>You got ${score}/10 correct, try again</p>
        <button class="restartButton" type="button">Restart Quiz!</button>
    </section>`    
}

function renderResults() {
    $('.question-form').html(correctResultsTemplate(questionNumber));
}

function renderFailingResults() {
    $('.question-form').html(incorrectResultsTemplate);
}

function handleNextButton() {
    $('body').on('click', '.nextButton', function(event) {
    if (questionNumber < 10) {
        questionNumber++
        nextQuestion()
    } else if (score >= 8) {
        renderResults();
    } else {
        renderFailingResults()
    }
});
}

function handleRestartButton() {
    $('.main').on('click', '.restartButton', function (event) {
        location.reload();
    })
}

function handleButtons() {
    handleStartButton();
    handleSubmitButton();
    handleNextButton();
    handleRestartButton();
}

$(handleButtons);