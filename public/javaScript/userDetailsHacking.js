document.addEventListener('DOMContentLoaded', function () {
    let registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = new FormData(registrationForm);
        let formObject = {};
        formData.forEach(function (value, key) {
            formObject[key] = value;
        });
        let formJSON = JSON.stringify(formObject);
        fetch('/newuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formJSON
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
});
