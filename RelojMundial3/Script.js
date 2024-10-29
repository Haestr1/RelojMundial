let html = document.getElementById("Tiempo");
setInterval(function(){
    Tiempo = new Date();

    Horas = Tiempo.getHours();
    Minutos = Tiempo.getMinutes();
    Segundos = Tiempo.getSeconds();

    if(Horas<10)
        Horas = "0"+Horas;
    if(Minutos<10)
        Minutos = "0"+Minutos;
    if(Segundos<10)
        Segundos = "0"+Segundos;

    html.innerHTML = Horas+" : "+Minutos+" : "+Segundos;
},1000);