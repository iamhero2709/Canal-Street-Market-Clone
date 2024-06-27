// Click event handling and class toggling for panels
document.querySelectorAll('.panel').forEach(function(panel) {
    panel.addEventListener('click', function() {
        // Remove active class from all panels
        document.querySelectorAll('.panel').forEach(function(panel) {
            panel.classList.remove('active');
        });
        
        // Toggle active class on the clicked panel
        this.classList.toggle('active');
    });
});

// Click event handling for .panel.active elements
document.querySelectorAll('.panel.active').forEach(function(panel) {
    panel.addEventListener('click', function() {
        this.classList.remove('active');
    });
});

// Adding active class to the first .home element on document ready
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.home').classList.add('active');
});

// Logging 'hello' to console
console.log('hello');
