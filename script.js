document.getElementById('submit-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    let responseArea = document.getElementById('ai-response');
    
    // Placeholder for AI response (to be replaced with actual API call)
    responseArea.textContent = 'You asked: ' + userInput + '? Let me think...';

    // Reset the input field
    document.getElementById('user-input').value = '';
});
