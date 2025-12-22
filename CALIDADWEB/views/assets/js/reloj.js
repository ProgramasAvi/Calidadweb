let tiempo = document.getElementById("tiempo");
let fecha = document.getElementById("fecha");
meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

setInterval(function(){
    local = new Date();

    horas = local.getHours();
    minutos = local.getMinutes();
    segundos = local.getSeconds();

    if(horas<10)
    horas = "0"+horas;
    if(minutos<10)
    minutos = "0"+minutos;
    if(segundos<10)
    segundos = "0"+segundos;

    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    tiempo.innerHTML = horas+" : "+minutos+" : "+segundos;
    fecha.innerHTML = `${day} ${meses[month]} ${year}`;
    
},1000);