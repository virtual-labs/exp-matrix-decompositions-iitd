/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. For any structure, when both ends have roller supports then the structure will be_____  ", ///// Write the question inside double quotes
            answers: {
                a: "Stable", ///// Write the option 1 inside double quotes
                b: "Unstable", ///// Write the option 2 inside double quotes
                c: "(a) and (b) of the above", ///// Write the option 1 inside double quotes
                d: "Not defined", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "2. The necessary condition for equiliberium of the body is_____", ///// Write the question inside double quotes
            answers: {
                a: "ΣH = 0", ///// Write the option 1 inside double quotes
                b: "ΣV = 0", ///// Write the option 2 inside double quotes
                c: "ΣM = 0", ///// Write the option 1 inside double quotes
                d: "All of the above", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "3. The number of unknowns to be determined in the stiffness method is equal to_____ .", ///// Write the question inside double quotes
            answers: {
                a: "Static indeterminacy", ///// Write the option 1 inside double quotes
                b: "Kinematic indeterminacy", ///// Write the option 2 inside double quotes
                c: "Difference of Static indeterminacy and kinematic indeterminacy", ///// Write the option 1 inside double quotes
                d: "Static indeterminacy / Kinematic indeterminacy", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        {
            question: "3. For a structure with n degrees of freedom (DOF), the degree of kinematic indeterminacy is_____ .", ///// Write the question inside double quotes
            answers: {
                a: "3R - n", ///// Write the option 1 inside double quotes
                b: "3R + n", ///// Write the option 2 inside double quotes
                c: "2R - n", ///// Write the option 1 inside double quotes
                d: "4R + n", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

       
         
        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
