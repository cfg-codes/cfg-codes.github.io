document.addEventListener('DOMContentLoaded', function() {
    // Terminal text typing effect
    const terminalTexts = document.querySelectorAll('.terminal-text');
    
    terminalTexts.forEach(text => {
        const delay = parseInt(text.getAttribute('data-delay')) || 0;
        
        setTimeout(() => {
            let textContent = text.textContent.trim();
            text.textContent = '';
            text.classList.add('typing');
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < textContent.length) {
                    text.textContent += textContent.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    text.classList.remove('typing');
                    
                    // Hide cursor after typing is complete
                    setTimeout(() => {
                        text.classList.add('cursor-hidden');
                    }, 1000);
                }
            }, 50);
            
            text.classList.add('visible');
        }, delay);
    });
    
    // Code line reveal effect
    const codeLines = document.querySelectorAll('.code-line');
    
    codeLines.forEach(line => {
        const delay = parseInt(line.getAttribute('data-delay')) || 0;
        
        setTimeout(() => {
            line.classList.add('visible');
        }, delay);
    });
});