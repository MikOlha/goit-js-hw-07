document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');

    if (!form) {
        console.error('Form element not found');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = form.elements.email.value.trim();
        const password = form.elements.password.value.trim();

        if (!email || !password) {
            alert('All form fields must be filled in');
            return;
        }

        const formData = {
            email,
            password,
        };

        console.log(formData);
        form.reset();
    });
});