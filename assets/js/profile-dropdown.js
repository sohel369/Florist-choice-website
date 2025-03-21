document.addEventListener('DOMContentLoaded', function() {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!profileDropdown.contains(e.target)) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(10px)';
        }
    });

    // Handle logout
    const logoutButton = document.querySelector('.logout');
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Add your logout logic here
        alert('Logging out...');
    });
});