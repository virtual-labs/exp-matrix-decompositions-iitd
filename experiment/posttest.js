
(function() {
    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll(".answers");

        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

            } else {
                answerContainers[questionNumber].style.color = "red";
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");







    /////////////// MCQ below  ///////////////


    const myQuestions = [{
            question: "1. What will be the kinematic indeterminacy for a beam having one end hinge and other end roller?", 
            answers: {
                a: "3", 
                b: "0 ", 
                c: "5",
                d: "2", 
            },
            correctAnswer: "a" 
        },
                         
//       

        {
            question: "2. A fixed beam (both ends are fixed) is_____", 
            answers: {
                a: "Unstable ", 
                b: "Have moments at both the ends",
                c: "is kinematically indeterminate", 
                d: "is kinematically determinate",
            },
            correctAnswer: "d" 
        },
                         
        {
            question: "3. The degree of freedom for the vertical guided roller is_____ ", ///// Write the question inside double quotes
            answers: {
                a: "0", ///// Write the option 1 inside double quotes
                b: "1", ///// Write the option 2 inside double quotes
                c: "2 ", ///// Write the option 1 inside double quotes
                d: "3", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "4. The degree of freedom of a joint for a rigid jointed plane frame is_____", ///// Write the question inside double quotes
            answers: {
                a: "0", ///// Write the option 1 inside double quotes
                b: "2", ///// Write the option 2 inside double quotes
                c: "3", ///// Write the option 1 inside double quotes
                d: "6", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },


        {
            question: "5. The degree of freedom for a pin jointed plane frame is_____" , 

            answers: {
                a: "3J - m - r", 
                b: "3J + m - r", 
                c: "2J - r", 
                d: "2J + m", 
            },
            correctAnswer: "c" 
        }, 
        

         


        
    ];




    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();


