const featuresList = document.getElementById('features').querySelector('ul');

featuresList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(`You clicked on ${e.target.textContent}`);
    }
});