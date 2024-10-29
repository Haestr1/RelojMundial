const $Tiempo = document.querySelector('.Tiempo'),
$Fecha = document.querySelector('.Fecha');

function RelojMundial(){
    let f = new Date(),
    Dia = f.getDate(),
    Mes = f.getMonth() + 1,
    Año = f.getFullYear(),
    DiaSemana = f.getDay;

    Dia = ('0' + Dia).slice(-2);
    Mes = ('0' + Mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    $Tiempo.innerHTML = timeString;
    
    let Semana = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showSemana = (Semana[DiaSemana]);
    $Fecha.innerHTML = `${Año}-${Mes}-${Dia} ${showSemana}`
}
setInterval(() => {
    RelojMundial()
}, 1000);