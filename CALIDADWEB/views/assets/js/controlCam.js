function camCed() {
    var qrCedula = $.trim($('#QRCEDULA').val());
    /* alert(qrCedula) */

    $.ajax({
        url: "../models/controlCam.php",
        type: "POST",
        datatype: "json",
        data: {
            qrCedula: qrCedula
        },
        success: function (data) {
            const datos = JSON.parse(data)

            datos.forEach(dato => {
                let nombre = dato.nombre;
                let cedula = dato.cedula;
                let descripcion = dato.descripcion;
                $("#inpNombreBPM").val(nombre);
                $("#QRCEDULA").val(cedula);
                $("#inpDescripcionBPM").val(descripcion);

            });
        }
    });
}
const porcentBPM = () => {
    var count = $("#selectFrenteBPM :selected").length;
    var ttl = 10;

    $("#pcBPM").val(parseFloat(((ttl - count) * 100) / ttl));
};
//----------------------------------------------------------------------------------//----------------------





