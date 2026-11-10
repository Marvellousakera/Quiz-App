// questions, options and answers are stored in array of object
        const quizQuestion = [
            {
               question:"Which is the largest ocean in the world?", 
               option:["a. Atlantic","b. Indian","c. Arctic","d. Pacific"],
               answer:"d. Pacific"
            },
            {
                question:"Which animal known as the King of the Jungle?",
                option:["a. Elephant","b. Lion","c. Tiger","d. Giraffe"],
                answer:"b. Lion"
            },
            {
                question:"What color do you get by mixing blue and yellow?",
                option:["a. Orange","b. Purple","c. Green","d. Brown"],
                answer:"c. Green"
            },
            {
                question:"Which planet do we live on?",
                option: ["a. Mars","b. Venus","c. Jupiter","d. Earth"],
                answer:"d. Earth"
            },
            {
                question:"How many months are in a year?",
                option:["a. 10","b. 12","c. 11","d. 13"],
                answer:"b. 12"
            },
            {
                question:"Which fruit is yellow and curved?",
                option:["a. Apple", "b. Banana", "c. Grape", "d. Orange"],
                answer:"b. banana"
            },
            {
                question:"Which amimal is the largest on land?",
                option:["a. Elephant","b. Rhino", "c. Hippo", "d. Giraffe"],
                answer:"a. Elephant"
            },
            {
                question:"How many continents are the in the world?",
                option:["a. 5","b. 6","c. 7", "d. 8"],
                answer:"c. 7"
            },
            {
                question:"What do we call a baby cat?",
                option:["a. Puppy","b. Kitten","c. Cub", "d. Calf"],
                answer:"b. Kitten"
            },
            {
                question:"Which of these is a primary color",
                option:["a. Green", "b. Orange", "c. Red", "d. Pink"],
                answer:"c. Red"
            }
        ]; 


        let currentIndex = 0; //restart the question
        let score = 0;     // reset the score
        let selectedOption =""; //reset the option the option selected

       const notify = document.getElementById('notifyOption');

       // function to display questions and options
        function showQuestion(){

            const currentQuestion = quizQuestion[currentIndex].question;  // used to declare each current question 

            document.getElementById('displayQuestion').innerText = currentQuestion; //used to make the current queston display on the page

            const optionList = quizQuestion[currentIndex].option; // options is been declared
            const optionBox = document.getElementById('displayOption');  //where options will be displayed on the page
           
            optionBox.innerHTML ="";  //clear the option section

            //loop to go through the numbers of options
            for(let i = 0; i < optionList.length; i++){
               const optBtn = document.createElement('button');
               optBtn.textContent = optionList[i]; 


                 optBtn.addEventListener("click", function(){  //it runs when the click  happens
                 selectedOption = optionList[i];  //saves the selected option
                 notify.textContent ="";  //clears the warning message
                 notify.classList.remove("error");  // remove the red style
               });
                optionBox.appendChild(optBtn);  //takes the optBtn created and puts it inside the optionBox to show on the page
            } 
        }


        document.getElementById('nextBtn').addEventListener("click", function(){

            //notify the user to select an option
            if(selectedOption === ""){
                notify.textContent = "Please select an option";
                notify.style.color = "red";
                notify.classList.add("error");
                return;
            }

            //add score if the option selected is the correct answer
            if(selectedOption === quizQuestion[currentIndex].answer){
                score++; // add score
            }

            currentIndex++; //move to the next question

            selectedOption =""; // clear the last selected option

            //check whether there is still more question to display
            if(currentIndex < quizQuestion.length){
                showQuestion(); // function called to display another question and options
            }else {
                document.getElementById('displayQuestion').innerText = " You scored \n" + score + " / " + quizQuestion.length;  // calculate the score
                document.getElementById('displayOption').innerText = ""; //used to clear options
                document.getElementById('nextBtn').style.display = "none";  //used to hide the next button when the score is been displayed
                document.getElementById('restartBtn').style.display = "inline-block"; // show the restart button to restart the quiz session
            }


        });

        //take acton when the restart button is been clicked
        document.getElementById('restartBtn').addEventListener("click", function(){
            currentIndex = 0; // restart the question
            score = 0; //reset the score
            selectedOption ="";  // clear the last selected option

            document.getElementById('restartBtn').style.display = "none"; // hide the restart button when a new quiz session started
            document.getElementById('nextBtn').style.display = "inline-block";   // display the next button when the quiz session started
            // quizQuestion.sort(() => math.round() - 0.5);
            showQuestion();  //call the function to display question and the options
        });

        showQuestion();