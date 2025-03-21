document.addEventListener('DOMContentLoaded', function() {
    const editButton = document.getElementById('editButton');
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');

    editButton.addEventListener('click', function() {
        const newName = prompt("Enter your name:", userName.innerText);
        const newEmail = prompt("Enter your email:", userEmail.innerText);
        
        if (newName && newName.trim() !== '') {
            userName.innerText = newName;
        }
        
        if (newEmail && newEmail.trim() !== '' && isValidEmail(newEmail)) {
            userEmail.innerText = newEmail;
        } else if (newEmail) {
            alert('Please enter a valid email address');
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Profile picture change functionality
    const changePhotoBtn = document.querySelector('.change-photo');
    const profilePic = document.querySelector('.profile-pic');

    changePhotoBtn.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    profilePic.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
        
        input.click();
    });
});