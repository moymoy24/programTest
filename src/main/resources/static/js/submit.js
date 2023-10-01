document.getElementById('surveyForm').addEventListener('submit', function(e) {
            e.preventDefault();

            let formData = new FormData(this);
            let answers = {};

            for (let [key, value] of formData.entries()) {
                answers[key] = parseInt(value);
            }

            fetch('/survey/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(answers)
            }).then(response => {
                if (response.ok) {
                    alert('Survey submitted successfully!');
                } else {
                    alert('Failed to submit survey.');
                }
            });
        });