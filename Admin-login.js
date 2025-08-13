 document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const togglePassword = document.getElementById('togglePassword');
            
            // Toggle password visibility
            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.textContent = type === 'password' ? '👁️' : '🔒';
            });
            
            // Form validation
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;
                
                // Email validation
                if (!emailInput.value.trim()) {
                    showError(emailInput, 'emailError', 'Email is required');
                    isValid = false;
                } else if (!isValidEmail(emailInput.value.trim())) {
                    showError(emailInput, 'emailError', 'Please enter a valid email');
                    isValid = false;
                } else {
                    hideError(emailInput, 'emailError');
                }
                
                // Password validation
                if (!passwordInput.value.trim()) {
                    showError(passwordInput, 'passwordError', 'Password is required');
                    isValid = false;
                } else if (passwordInput.value.length < 6) {
                    showError(passwordInput, 'passwordError', 'Password must be at least 6 characters');
                    isValid = false;
                } else {
                    hideError(passwordInput, 'passwordError');
                }
                
                // If form is valid, submit it (in a real app)
                if (isValid) {
                    // Here you would typically send the data to your server
                    console.log('Form submitted:', {
                        email: emailInput.value,
                        password: passwordInput.value,
                        remember: document.getElementById('remember').checked
                    });
                    
                    // Show success (just for demo)
                    alert('Login successful! (This is a demo)');
                    // loginForm.reset();
                }
            });
            
            // Real-time validation
            emailInput.addEventListener('input', function() {
                if (isValidEmail(this.value.trim())) {
                    hideError(this, 'emailError');
                }
            });
            
            passwordInput.addEventListener('input', function() {
                if (this.value.length >= 6) {
                    hideError(this, 'passwordError');
                }
            });
            
            // Helper functions
            function showError(input, errorId, message) {
                input.classList.add('error');
                const errorElement = document.getElementById(errorId);
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
            
            function hideError(input, errorId) {
                input.classList.remove('error');
                document.getElementById(errorId).style.display = 'none';
            }
            
            function isValidEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }
        });