document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle dropdown
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        dropdownContent.classList.toggle('show');
    });
    
    // Close when clicking outside
    document.addEventListener('click', function() {
        dropdownBtn.setAttribute('aria-expanded', 'false');
        dropdownContent.classList.remove('show');
    });
    
    // Prevent closing when clicking inside dropdown
    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdownBtn.setAttribute('aria-expanded', 'false');
            dropdownContent.classList.remove('show');
        }
    });
});
