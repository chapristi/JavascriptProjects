const heure = document.querySelector(".heure")

let date  = new Date(2021, 12, 24, 10, 33, 30, 0)

let interval = setInterval(()=>{
    let dateNow = new Date()
    let total_secondes = (date - dateNow) / 1000;

    let jours = Math.floor(total_secondes / (60 * 60 * 24));
    let heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
    let  minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
    let secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
    heure.innerHTML = jours+ "j:"  +heures + "h:" + minutes + "m:" + secondes +"s"


}, 1000);



