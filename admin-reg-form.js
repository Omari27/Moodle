 document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Reset error messages
            const errorElements = document.querySelectorAll('.error');
            errorElements.forEach(element => {
                element.textContent = '';
            });
            
            // Validate form
            let isValid = true;
            
            // Name validation
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            } else if (name.value.length < 3) {
                document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
                isValid = false;
            }
            
            // Email validation
            const email = document.getElementById('email');
            if (!email.value) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            // Password validation
            const password = document.getElementById('password');
            if (!password.value) {
                document.getElementById('passwordError').textContent = 'Password is required';
                isValid = false;
            } else if (password.value.length < 8) {
                document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
                isValid = false;
            } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password.value)) {
                document.getElementById('passwordError').textContent = 'Password must contain at least one letter and one number';
                isValid = false;
            }
            
            // Confirm password validation
            const confirmPassword = document.getElementById('confirmPassword');
            if (password.value !== confirmPassword.value) {
                document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
                isValid = false;
            }
            // Gender validation
            const gender = document.getElementById('gender');
            if (!gender.value) {
                document.getElementById('genderError').textContent = 'Gender is required';
                isValid = false;
            }
        
            // If form is valid, submit it (in a real app, you would send to server)
            if (isValid) {
                alert('Form submitted successfully!');
                // this.submit(); // Uncomment to actually submit the form
                console.log('Form data:', {
                    name: name.value,
                    email: email.value,
                    password: password.value,
                    gender: gender.value,
                });
            }
        });
        
        // Real-time validation for some fields
        document.getElementById('password').addEventListener('input', function() {
            const passwordError = document.getElementById('passwordError');
            if (this.value.length > 0 && this.value.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters';
            } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(this.value)) {
                passwordError.textContent = 'Password must contain at least one letter and one number';
            } else {
                passwordError.textContent = '';
            }
        });
        
        document.getElementById('confirmPassword').addEventListener('input', function() {
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            if (this.value !== document.getElementById('password').value) {
                confirmPasswordError.textContent = 'Passwords do not match';
            } else {
                confirmPasswordError.textContent = '';
            }
        });