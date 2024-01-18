    function startQuestions() {
        document.getElementById("questions").style.display = "block";
    }
    
    function answerYes() {
        document.getElementById("questions").style.display = "none";
        document.getElementById("que").style.display = "none";
        document.getElementById("init").innerText = "YAAAAYYYYAYAYAYA🎉🎉🎉";
        document.getElementById("message").style.display = "block";
        document.getElementById("messageText").innerText = "Great!!!!... so we'll meet up one day and go out on a little...... 'adventure' let's call it.";
        showConfetti()
    }
    
    function answerNo() {
        document.getElementById("questions").style.display = "none";
        document.getElementById("que").style.display = "none";
        document.getElementById("init").innerText = "Then I'll ask after a bit more time...";
        document.getElementById("message").style.display = "block";
        document.getElementById("messageText").innerText = "So I'll keep trying to win you over and get my beautiful sunshine";

    }
    
    // Function to show confetti
    function showConfetti() {
        const confettiSettings = {
        target: 'confetti-canvas',
        respawn: true,
        colors: ['#ff0000', '#00ff00', '#0000ff'], 
        };
    
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => {
        confetti.clear();
        }, 5000);
    }
    