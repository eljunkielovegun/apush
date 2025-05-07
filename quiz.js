// Quiz data organized by periods
const quizData = {
    period1: [
        {
            question: "Which of the following was NOT a part of the Columbian Exchange?",
            options: [
                "Corn being introduced to Europe",
                "Horses being introduced to the Americas",
                "Smallpox spreading to Native American populations",
                "Rice being introduced to Asia"
            ],
            answer: 3
        },
        {
            question: "What were the '3 Gs' that drove European exploration?",
            options: [
                "Gold, Glory, and God",
                "Government, Geography, and Growth",
                "Guns, Germs, and Gold",
                "Governance, Guidance, and Greatness"
            ],
            answer: 0
        },
        {
            question: "Which Native American group formed the Haudenosaunee, a political confederation of five (later six) tribes?",
            options: [
                "Pueblo",
                "Iroquois",
                "Cherokee",
                "Sioux"
            ],
            answer: 1
        },
        {
            question: "What was the encomienda system established by Spanish colonizers?",
            options: [
                "A system of trade between Native Americans and Europeans",
                "A labor system that granted colonizers control over Native Americans",
                "A religious conversion program for indigenous peoples",
                "A system of self-governance for Native American tribes"
            ],
            answer: 1
        },
        {
            question: "Which of the following was a major consequence of the Columbian Exchange?",
            options: [
                "The immediate end of Native American cultures",
                "Widespread disease and demographic collapse of indigenous populations",
                "The introduction of democracy to European nations",
                "Immediate global economic equality"
            ],
            answer: 1
        }
    ],
    period5: [
        {
            question: "What was the primary purpose of the Emancipation Proclamation?",
            options: [
                "To free all slaves throughout the United States",
                "To free slaves only in the Confederate states",
                "To recruit freed slaves into the Union Army",
                "To compensate slave owners for their lost property"
            ],
            answer: 1
        },
        {
            question: "Which of the following was NOT one of the Reconstruction Amendments?",
            options: [
                "13th Amendment (abolished slavery)",
                "14th Amendment (citizenship and equal protection)",
                "15th Amendment (voting rights for Black men)",
                "16th Amendment (federal income tax)"
            ],
            answer: 3
        },
        {
            question: "What was the significance of the Compromise of 1877?",
            options: [
                "It ended Reconstruction and withdrew federal troops from the South",
                "It granted women the right to vote",
                "It established the first national parks",
                "It created the first civil rights legislation"
            ],
            answer: 0
        },
        {
            question: "Which of the following best describes the 'Black Codes' enacted after the Civil War?",
            options: [
                "Laws that expanded rights for formerly enslaved people",
                "Secret codes used by escaping slaves on the Underground Railroad",
                "Laws restricting African Americans' rights and creating conditions similar to slavery",
                "Communication methods used by abolitionists"
            ],
            answer: 2
        },
        {
            question: "What economic system emerged in the South after Reconstruction that kept many freedmen in debt and poverty?",
            options: [
                "Free market capitalism",
                "Socialism",
                "Sharecropping",
                "Mercantilism"
            ],
            answer: 2
        }
    ],
    // Add more period quizzes as needed
};

// Elements
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const progressElement = document.getElementById('progress');
const periodSelectElement = document.getElementById('period-select');

// Variables
let currentPeriod = 'period1';
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = undefined;

// Get period from URL if present
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function initQuiz() {
    // Check if a period is specified in the URL
    const periodParam = getUrlParameter('period');
    if (periodParam && quizData['period' + periodParam]) {
        currentPeriod = 'period' + periodParam;
        if (periodSelectElement) {
            periodSelectElement.value = currentPeriod;
        }
    }
    
    resetQuiz();
    loadQuestion();
}

// Load question and options
function loadQuestion() {
    const currentQuizData = quizData[currentPeriod];
    const currentQuestion = currentQuizData[currentQuestionIndex];
    
    questionElement.innerText = currentQuestion.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add options
    currentQuestion.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.dataset.index = index;
        optionDiv.innerText = option;
        
        optionDiv.addEventListener('click', () => {
            // Remove selected class from all options
            document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            optionDiv.classList.add('selected');
            
            // Save selected option
            selectedOption = index;
            
            // Enable submit button
            submitButton.disabled = false;
        });
        
        optionsElement.appendChild(optionDiv);
    });
    
    // Update progress
    updateProgress();
    
    // Hide result
    resultElement.style.display = 'none';
    
    // Show submit button, hide next button
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    
    // Disable submit button until an option is selected
    submitButton.disabled = true;
}

// Handle submit button click
function handleSubmit() {
    const currentQuizData = quizData[currentPeriod];
    const currentQuestion = currentQuizData[currentQuestionIndex];
    
    // Check answer
    const options = document.querySelectorAll('.quiz-option');
    
    options.forEach((option, index) => {
        if (index === currentQuestion.answer) {
            option.classList.add('correct');
        } else if (index === selectedOption) {
            option.classList.add('incorrect');
        }
        
        // Disable clicking on options
        option.style.pointerEvents = 'none';
    });
    
    // Update score
    if (selectedOption === currentQuestion.answer) {
        score++;
        resultElement.innerText = 'Correct!';
        resultElement.style.color = '#4CAF50';
    } else {
        resultElement.innerText = 'Incorrect. The correct answer is: ' + currentQuestion.options[currentQuestion.answer];
        resultElement.style.color = '#f44336';
    }
    
    // Show result
    resultElement.style.display = 'block';
    
    // Hide submit button, show next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
    
    // If it's the last question, change next button text
    if (currentQuestionIndex === currentQuizData.length - 1) {
        nextButton.innerText = 'Finish';
    }
}

// Handle next button click
function handleNext() {
    const currentQuizData = quizData[currentPeriod];
    
    // Move to next question
    currentQuestionIndex++;
    
    // If there are more questions, load the next one
    if (currentQuestionIndex < currentQuizData.length) {
        loadQuestion();
    } else {
        // Show final score
        quizContainer.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your Score: ${score}/${currentQuizData.length}</p>
            <p>${getScoreMessage(score, currentQuizData.length)}</p>
            <button class="quiz-btn" onclick="resetQuiz()">Try Again</button>
            <button class="quiz-btn" onclick="window.location.href='index.html'">Return Home</button>
        `;
    }
}

// Update progress
function updateProgress() {
    const currentQuizData = quizData[currentPeriod];
    progressElement.innerText = `Question ${currentQuestionIndex + 1} of ${currentQuizData.length}`;
}

// Reset quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = undefined;
    
    // If it's a new period, load the first question
    loadQuestion();
}

// Get score message
function getScoreMessage(score, total) {
    const percentage = (score / total) * 100;
    
    if (percentage >= 90) {
        return "Excellent! You're well prepared for the APUSH exam!";
    } else if (percentage >= 70) {
        return "Good job! Continue reinforcing your knowledge.";
    } else if (percentage >= 50) {
        return "Not bad, but you should review this period more thoroughly.";
    } else {
        return "You need to study this period more. Review the key concepts and try again.";
    }
}

// Change period
function changePeriod() {
    if (periodSelectElement) {
        currentPeriod = periodSelectElement.value;
        resetQuiz();
    }
}

// Initialize quiz when page loads
window.addEventListener('DOMContentLoaded', initQuiz);

// Event listeners
if (submitButton) {
    submitButton.addEventListener('click', handleSubmit);
}

if (nextButton) {
    nextButton.addEventListener('click', handleNext);
}

if (periodSelectElement) {
    periodSelectElement.addEventListener('change', changePeriod);
}
