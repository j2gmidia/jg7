const delayEmSegundos = 3;


// restante do script
setTimeout(() => {
    document.querySelectorAll('.delay').forEach(el => el.classList.remove('delay'));
}, delayEmSegundos * 1000);


const data = new Date().toLocaleDateString('en', { dateStyle: "full" });
document.querySelector('.date-today').innerText = data;