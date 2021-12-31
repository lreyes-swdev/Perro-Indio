// Set the date we're counting down to
var countDownDate = new Date("Mar 10, 2022 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dd").innerHTML = days.toString().padStart(2, "0");
    document.getElementById("hh").innerHTML = hours.toString().padStart(2, "0");
    document.getElementById("mm").innerHTML = minutes.toString().padStart(2, "0");
    document.getElementById("ss").innerHTML = seconds.toString().padStart(2, "0");

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        /*
        document.getElementById("dd").innerHTML = "EXPIRED";
        document.getElementById("hh").innerHTML = "EXPIRED";
        document.getElementById("mm").innerHTML = "EXPIRED";
        document.getElementById("ss").innerHTML = "EXPIRED";
        */
        document.getElementById("countdown").innerHTML = "LARGO CAMINO AL SOL";
    }
}, 1000);

const infoDisco = (disco) => {
    let info = {
        tapa: "",
        año: "",
        título: "",
        descripción: "",
        url_spotify: ""
    };
    //console.log(disco);

    if (!(disco >= 0 && disco <= 5)) {
        return;
    }

    switch (disco) {
        case 0: //(X) Cerrar
            document.getElementById("album-spotify").style.display = "none";
            window.location.hash = '#discografía';
            return;
        case 1: //(2017) Perro Indio
            info.tapa = "d2017.jpg";
            info.año = "2017";
            info.título = "PERRO INDIO";
            info.descripción = "Grabado, mezclado y masterizado por Fernando Iacono en estudio La Autopista Records.";
            info.url_spotify = "2piiblV4yUxDNlzro7plZz";
            break;
        case 2: //(2018) Laberinto
            info.tapa = "d2018.jpg";
            info.año = "2018";
            info.título = "LABERINTO";
            info.descripción = "Grabado, mezclado y masterizado por Fernando Iacono en estudio La Autopista Records.";
            info.url_spotify = "6a8WAzeay6VKuLEDKUBgnT";
            break;
        case 3: //(2019) Cumelén
            info.tapa = "d2019.jpg";
            info.año = "2019";
            info.título = "CUMELÉN";
            info.descripción = "Grabado, mezclado y masterizado por Fernando Iacono en estudio La Autopista Records.";
            info.url_spotify = "72PxDlqReckRSEz9iY74EO";
            break;
        case 4: //(2019) Kaani
            info.tapa = "d2019-I.jpg";
            info.año = "2019";
            info.título = "KAANI -disco doble en vivo-";
            info.descripción = "Grabado, mezclado y masterizado por Fernando Iacono en estudio La Autopista Records.";
            info.url_spotify = "3Ecqtf9IHOvsuVLtsHw7K3";
            break;
        case 5: //(2021) Largo camino al sol
            info.tapa = "d2021.jpg";
            info.año = "2021";
            info.título = "LARGO CAMINO AL SOL";
            info.descripción = "Grabado, mezclado y masterizado por Fernando Iacono en estudio La Autopista Records.";
            info.url_spotify = "2piiblV4yUxDNlzro7plZz";
            break;
    }

    //console.log(info);
    document.getElementById("album-spotify").style.display = "";
    document.getElementById("album-spotify").innerHTML = `
        <hr>
        <div class="row justify-content-center align-items-center text-center">
            <div onclick="infoDisco(0)">
                <p class="cursor-pointer m-0">
                    <i class="fa fa-times" aria-hidden="true"></i> Ocultar
                </p>
                <hr>
            </div>
            <div class="col-12 col-lg-6">
                <img src="img/${info.tapa}" class="img-fluid" alt="Isologo Perro Indio">
            </div>
            <div class="col-12 col-lg-6">
                <hr>
                <p>${info.año} &copy; ${info.título}</p>
                <hr>
                <p>${info.descripción}</p>
                <hr>
                <iframe src="https://open.spotify.com/embed/album/${info.url_spotify}?utm_source=generator"
                    width="100%" height="390" frameBorder="0" allowfullscreen=""
                    allow="clipboard-write; encrypted-media; picture-in-picture;"></iframe>
            </div>
            <div onclick="infoDisco(0)">
                <hr>    
                <p class="cursor-pointer m-0">
                    <i class="fa fa-times" aria-hidden="true"></i> Ocultar
                </p>
            </div>
        </div>
        <hr>
        `;
    window.location.hash = '';
    window.location.hash = '#album-spotify';
};

/*
    Typewriter Effect
    https://css-tricks.com/snippets/css/typewriter-effect/
*/

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};