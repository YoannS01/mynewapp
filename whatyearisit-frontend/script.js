

fetch('mynewapp-q69y90r9p-yoanns-projects-5da54912.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year;
    });

