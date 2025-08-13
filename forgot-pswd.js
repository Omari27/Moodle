 const form = document.getElementById('resetForm');
        form.addEventListener('submit', function(e) {
            const password = document.getElementById('password').value;
            const confirm = document.getElementById('confirmPassword').value;
            const errorDiv = document.getElementById('error');

            if (password !== confirm) {
                e.preventDefault();
                errorDiv.textContent = "Passwords do not match!";
            }
        });