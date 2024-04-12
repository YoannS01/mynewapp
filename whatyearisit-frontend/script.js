

fetch('https://github.com/YoannS01/mynewapp.git)
    .then(response => response.json())
    .then(data => {
        document.querySelector('#icon').src = data.icon_url;
        document.querySelector('#fact').textContent = data.value;
    });