document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    
    const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', e => {
        e.preventDefault();
        let hasError = false;

        inputs.forEach(input => {
            const value = input.value.trim();
            const error = input.nextElementSibling;
            // const isEmailField = input.type === 'email';
            let invalid = false;

            if (!value) {
                invalid = true;
            }

            // else if (isEmailField && !emailRegex.test(value)) {
            //     invalid = true;
            // }

            else if (input.type === 'email' && !emailRegex.test(value)) {
                invalid = true;
            }

            if (invalid) {
                input.classList.remove('wrong');
                error.classList.remove('wrong');
                void input.offsetWidth;
                void error.offsetWidth;
                input.classList.add('wrong');
                error.classList.add('wrong');
                hasError = true;
                return
                

            } else {
                input.classList.remove('wrong');
                error.classList.remove('wrong');
            }

        });

        if(!hasError) {
            form.submit();
        }

    });


});