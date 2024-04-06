
let ville = 'Québec';
recevoirTemperature(ville);

let changerVille = document.querySelector('.changer');

changerVille.addEventListener('click', () => {
    ville = prompt('Quelle ville souhaitez-vous voir ?')
    recevoirTemperature(ville);
});

function recevoirTemperature(ville){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric'

    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE){
            if (requete.status === 200){
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let city = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#city').textContent = city;
                console.log(city)
            }
            else{
                alert('Un problème est survenu')
            }
        }
    }
}