function calcular() {
  con = 0;
  try {
    var a0 = parseFloat(document.getElementById("controlCa").value) || 0,
      a1 = parseFloat(document.getElementById("controlCz").value) || 0,
      a2 = parseFloat(document.getElementById("controlCc").value) || 0,
      a3 = parseFloat(document.getElementById("controlCd").value) || 0,
      a4 = parseFloat(document.getElementById("controlCe").value) || 0,
      a5 = parseFloat(document.getElementById("controlCf").value) || 0,
      a6 = parseFloat(document.getElementById("controlCg").value) || 0,
      a7 = parseFloat(document.getElementById("controlCh").value) || 0,
      a8 = parseFloat(document.getElementById("controlCi").value) || 0,
      a9 = parseFloat(document.getElementById("controlCj").value) || 0,
      a10 = parseFloat(document.getElementById("controlCk").value) || 0,
      a11 = parseFloat(document.getElementById("controlCl").value) || 0,
      a12 = parseFloat(document.getElementById("controlCm").value) || 0,
      a13 = parseFloat(document.getElementById("controlCn").value) || 0,
      a14 = parseFloat(document.getElementById("controlCñ").value) || 0;
    document.getElementById("tempPromedio").value =
      (a0 + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14) / 15;

    if (a0 <= 4) {
      con++;
    }

    if (a1 <= 4) {
      con++;
    }

    if (a2 <= 4) {
      con++;
    }
    if (a3 <= 4) {
      con++;
    }
    if (a4 <= 4) {
      con++;
    }
    if (a5 <= 4) {
      con++;
    }
    if (a6 <= 4) {
      con++;
    }
    if (a7 <= 4) {
      con++;
    }
    if (a8 <= 4) {
      con++;
    }
    if (a9 <= 4) {
      con++;
    }
    if (a10 <= 4) {
      con++;
    }
    if (a11 <= 4) {
      con++;
    }
    if (a12 <= 4) {
      con++;
    }
    if (a13 <= 4) {
      con++;
    }
    if (a14 <= 4) {
      con++;
    }

    document.getElementById("porcenCumplimiento").value = parseInt(
      (con * 100) / 15, // habia 15 ahora hay 17
    );
    var e1 = document.getElementById("porcenCumplimiento").value;
    if (e1 < 100) {
      document.getElementById("porcenCumplimiento").style.backgroundColor = "red";
      document.getElementById("porcenCumplimiento").style.fontWeight = "800";
    } else {
      document.getElementById("porcenCumplimiento").style.fontWeight = "400";
      document.getElementById("porcenCumplimiento").style.backgroundColor = "#e8ecef";
    }
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function calcularPromedioTemperatura() {
    let suma = 0;
    let cantidadValidos = 0;

    for (let i = 1; i <= 17; i++) {
      const input = document.getElementById("chillConVC" + i);
      if (input && input.value !== "") {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
          suma += valor;
          cantidadValidos++;
        }
      }
    }

    const promedio = cantidadValidos > 0 ? suma / cantidadValidos : 0;
    const campoPromedio = document.getElementById("tempPromedio2");

    campoPromedio.value = promedio.toFixed(2);

    if (promedio > 4) {
      campoPromedio.style.backgroundColor = "red";
      campoPromedio.style.fontWeight = "bold";
    } else {
      campoPromedio.style.backgroundColor = "#49de09";
      campoPromedio.style.fontWeight = "bold";
    }
  }

  // Asignar evento a todos los inputs automáticamente
  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("chillConVC" + i);
    if (input) {
      input.addEventListener("input", calcularPromedioTemperatura);
    }
  }
});

//-- funciones para el calculo de porcentajes en  for-s-cci-64 inspeccion preoperativo planta de sacrificio ----------//
const porcentEscaldado = () => {
  var count = $("#selectEsc :selected").length;
  var ttl = 22;

  $("#pcEscaldado").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentEscaldados = () => {
  var count = $("#selectEscaldados :selected").length;
  var ttl = 30;

  $("#pcEscaldados").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentEviscera = () => {
  var count = $("#selectEvisc :selected").length;
  var ttl = 46;

  $("#pcEviscera").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentVisceras = () => {
  var count = $("#selectViscera :selected").length;
  var ttl = 35;

  $("#pcVisceras").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentEnfriamiento = () => {
  var count = $("#selectEnfri :selected").length;
  var ttl = 40;

  $("#pcEnfriamiento").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentDeshuese = () => {
  var count = $("#selectDeshuese :selected").length;
  var ttl = 21;

  $("#pcDeshuese").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentDesprese = () => {
  var count = $("#selectDespre :selected").length;
  var ttl = 49;

  $("#pcDesprese").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentFileteo = () => {
  var count = $("#selectFileteo :selected").length;
  var ttl = 28;

  $("#pcFileteo").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentProceso = () => {
  var count = $("#selectPosProc :selected").length;
  var ttl = 33;

  $("#pcProceso").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentHielo = () => {
  var count = $("#selectHielo :selected").length;
  var ttl = 14;

  $("#pcHielo").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentAlimentacion = () => {
  var count = $("#selectAlimen :selected").length;
  var ttl = 9;
  
  $("#pcAlimenta").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentCanastilla = () => {
  var count = $("#selectCanast :selected").length;
  var ttl = 9;
  
  $("#pcCanastilla").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentLavanderia = () => {
  var count = $("#selectLavan :selected").length;
  var ttl = 8;
  
  $("#pcLavanderia").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const porcentCarnes = () => {
  var count = $("#selectCarnes :selected").length;
  var ttl = 10;

  $("#pcCarnes").val(parseFloat(((ttl - count) * 100) / ttl).toFixed(2));
};
const pCumpliPreOpe = () => {
  console.log("Función pCumpliPreOpe llamada");
  pcEscaldado = parseInt($("#pcEscaldado").val());
  pcEscaldados = parseInt($("#pcEscaldados").val());
  pcEviscera = parseInt($("#pcEviscera").val());
  pcVisceras = parseInt($("#pcVisceras").val());
  pcEnfriamiento = parseInt($("#pcEnfriamiento").val());
  pcDesprese = parseInt($("#pcDesprese").val());
  pcDeshuese = parseInt($("#pcDeshuese").val());
  pcFileteo = parseInt($("#pcFileteo").val());
  pcProceso = parseInt($("#pcProceso").val());
  pcHielo = parseInt($("#pcHielo").val());
  pcCarnes = parseInt($("#pcCarnes").val());
  pcAlimenta = parseInt($("#pcAlimenta").val());
  pcCanastilla = parseInt($("#pcCanastilla").val());
  pcLavanderia = parseInt($("#pcLavanderia").val());
  $("#pCumplimientoPreOpe").val(
    (
      (pcEscaldado +
        pcEscaldados +
        pcEviscera +
        pcVisceras +
        pcEnfriamiento +
        pcDesprese +
        pcDeshuese +
        pcFileteo +
        pcProceso +
        pcHielo +
        pcCarnes +
        pcAlimenta +
        pcCanastilla +
        pcLavanderia) /
      14
    ).toFixed(2),
  );
};

//-----------------------------------------------------------------------------------------------------
const firm = () => {
  (function () {
    // Comenzamos una funcion auto-ejecutable

    $clearBtn = document.getElementById("clearBtn");
    $canvas = document.querySelector("#firmaPreOperativo");

    // Obtenenemos un intervalo regular(Tiempo) en la pamtalla
    window.requestAnimFrame = (function (callback) {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
          // Retrasa la ejecucion de la funcion para mejorar la experiencia
        }
      );
    })();

    // Traemos el canvas mediante el id del elemento html

    var ctx = $canvas.getContext("2d");

    const canvasEmpty = () => {};

    $("#controlEnviar").mouseover(function () {
      var cnv = document.getElementById("firmaPreOperativo");
      if (isCanvasEmpty(cnv))
        swal({
          icon: "warning",
          title: "ADVERTENCIA",
          text: "Recuerde Firma del INVIMA",
        });
    });
    function isCanvasEmpty(cnv) {
      const blank = document.createElement("canvas");

      blank.width = cnv.width;
      blank.height = cnv.height;

      return cnv.toDataURL() === blank.toDataURL();
    }

    // Mandamos llamar a los Elemetos interactivos de la Interfaz HTML

    var submitBtn = document.getElementById("draw-submitBtn");
    $clearBtn.addEventListener(
      "click",
      function (e) {
        // Definimos que pasa cuando el boton draw-clearBtn es pulsado
        clearCanvas();
      },
      false,
    );
    // Definimos que pasa cuando el boton draw-submitBtn es pulsado

    // Activamos MouseEvent para nuestra pagina
    var drawing = false;
    var mousePos = { x: 0, y: 0 };
    var lastPos = mousePos;
    $canvas.addEventListener(
      "mousedown",
      function (e) {
        /*
              Mas alla de solo llamar a una funcion, usamos function (e){...}
              para mas versatilidad cuando ocurre un evento
            */

        console.log(e);
        drawing = true;
        lastPos = getMousePos($canvas, e);
      },
      false,
    );
    $canvas.addEventListener(
      "mouseup",
      function (e) {
        drawing = false;
      },
      false,
    );
    $canvas.addEventListener(
      "mousemove",
      function (e) {
        mousePos = getMousePos($canvas, e);
      },
      false,
    );

    // Activamos touchEvent para nuestra pagina
    $canvas.addEventListener(
      "touchstart",
      function (e) {
        mousePos = getTouchPos($canvas, e);
        console.log(mousePos);
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );
    $canvas.addEventListener(
      "touchend",
      function (e) {
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var mouseEvent = new MouseEvent("mouseup", {});
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );
    $canvas.addEventListener(
      "touchleave",
      function (e) {
        // Realiza el mismo proceso que touchend en caso de que el dedo se deslice fuera del $canvas
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var mouseEvent = new MouseEvent("mouseup", {});
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );
    $canvas.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );

    // Get the position of the mouse relative to the $canvas
    function getMousePos(canvasDom, mouseEvent) {
      var rect = canvasDom.getBoundingClientRect();
      /*
              Devuelve el tamaño de un elemento y su posición relativa respecto
              a la ventana de visualización (viewport).
            */
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      };
    }

    // Get the position of a touch relative to the canvas
    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      console.log(touchEvent);
      /*
              Devuelve el tamaño de un elemento y su posición relativa respecto
              a la ventana de visualización (viewport).
            */
      return {
        x: touchEvent.touches[0].clientX - rect.left, // Popiedad de todo evento Touch
        y: touchEvent.touches[0].clientY - rect.top,
      };
    }

    // Draw to the canvas
    function renderCanvas() {
      if (drawing) {
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);

        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        lastPos = mousePos;
      }
    }

    function clearCanvas() {
      $canvas.width = $canvas.width;
    }

    // Allow for animation
    (function drawLoop() {
      requestAnimFrame(drawLoop);
      renderCanvas();
    })();
  })();
  /* const $btnSend = document.querySelector('#prueba');
    $btnSend.onclick = async (e) => {
        
        const data = $canvas.toDataURL("image/png");
        const fd = new FormData();
        fd.append("imagen", data); // Se llama "imagen", en PHP lo recuperamos con $_POST["imagen"]
        const respuestaHttp = await fetch("../controller/REGISTROS.php", {
            method: "POST",
            
           
        });
        const nombreImagenSubida = await respuestaHttp.json();
        console.log("La imagen ha sido enviada y tiene el nombre de: " + nombreImagenSubida);
    } */
  document.getElementById("frmio").addEventListener(
    "submit",
    function (e) {
      var image = $canvas.toDataURL(); // data:image/png....
      document.getElementById("base64").value = image;
    },
    false,
  );
};
//---------------------------------------------------------------------------------------------------------------------
const firmBPM = () => {
  (function () {
    // Comenzamos una funcion auto-ejecutable

    $clearBtnBPM = document.getElementById("clearBtnBPM");
    $canvas = document.querySelector("#firmaBPM");

    // Obtenenemos un intervalo regular(Tiempo) en la pamtalla
    window.requestAnimFrame = (function (callback) {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
          // Retrasa la ejecucion de la funcion para mejorar la experiencia
        }
      );
    })();

    // Traemos el canvas mediante el id del elemento html

    var ctx = $canvas.getContext("2d");

    const canvasEmpty = () => {};

    $("#controlEnviar").mouseover(function () {
      var cnv = document.getElementById("firmaBPM");
      if (isCanvasEmpty(cnv))
        swal({
          icon: "warning",
          title: "ADVERTENCIA",
          text: "Recuerde Firma del COLABORADOR",
        });
    });
    function isCanvasEmpty(cnv) {
      const blank = document.createElement("canvas");

      blank.width = cnv.width;
      blank.height = cnv.height;

      return cnv.toDataURL() === blank.toDataURL();
    }

    // Mandamos llamar a los Elemetos interactivos de la Interfaz HTML

    var submitBtn = document.getElementById("draw-submitBtn");
    $clearBtnBPM.addEventListener(
      "click",
      function (e) {
        // Definimos que pasa cuando el boton draw-clearBtn es pulsado
        clearCanvas();
      },
      false,
    );
    // Definimos que pasa cuando el boton draw-submitBtn es pulsado

    // Activamos MouseEvent para nuestra pagina
    var drawing = false;
    var mousePos = { x: 0, y: 0 };
    var lastPos = mousePos;
    $canvas.addEventListener(
      "mousedown",
      function (e) {
        /*
              Mas alla de solo llamar a una funcion, usamos function (e){...}
              para mas versatilidad cuando ocurre un evento
            */

        console.log(e);
        drawing = true;
        lastPos = getMousePos($canvas, e);
      },
      false,
    );
    $canvas.addEventListener(
      "mouseup",
      function (e) {
        drawing = false;
      },
      false,
    );
    $canvas.addEventListener(
      "mousemove",
      function (e) {
        mousePos = getMousePos($canvas, e);
      },
      false,
    );

    // Activamos touchEvent para nuestra pagina
    $canvas.addEventListener(
      "touchstart",
      function (e) {
        mousePos = getTouchPos($canvas, e);
        console.log(mousePos);
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );
    $canvas.addEventListener(
      "touchend",
      function (e) {
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var mouseEvent = new MouseEvent("mouseup", {});
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );
    $canvas.addEventListener(
      "touchleave",
      function (e) {
        // Realiza el mismo proceso que touchend en caso de que el dedo se deslice fuera del $canvas
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var mouseEvent = new MouseEvent("mouseup", {});
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );
    $canvas.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault(); // Prevent scrolling when touching the $canvas
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
          clientX: touch.clientX,
          clientY: touch.clientY,
        });
        $canvas.dispatchEvent(mouseEvent);
      },
      false,
    );

    // Get the position of the mouse relative to the $canvas
    function getMousePos(canvasDom, mouseEvent) {
      var rect = canvasDom.getBoundingClientRect();
      /*
              Devuelve el tamaño de un elemento y su posición relativa respecto
              a la ventana de visualización (viewport).
            */
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      };
    }

    // Get the position of a touch relative to the canvas
    function getTouchPos(canvasDom, touchEvent) {
      var rect = canvasDom.getBoundingClientRect();
      console.log(touchEvent);
      /*
              Devuelve el tamaño de un elemento y su posición relativa respecto
              a la ventana de visualización (viewport).
            */
      return {
        x: touchEvent.touches[0].clientX - rect.left, // Popiedad de todo evento Touch
        y: touchEvent.touches[0].clientY - rect.top,
      };
    }

    // Draw to the canvas
    function renderCanvas() {
      if (drawing) {
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);

        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        lastPos = mousePos;
      }
    }

    function clearCanvas() {
      $canvas.width = $canvas.width;
    }

    // Allow for animation
    (function drawLoop() {
      requestAnimFrame(drawLoop);
      renderCanvas();
    })();
  })();
  /* const $btnSend = document.querySelector('#prueba');
    $btnSend.onclick = async (e) => {
        
        const data = $canvas.toDataURL("image/png");
        const fd = new FormData();
        fd.append("imagen", data); // Se llama "imagen", en PHP lo recuperamos con $_POST["imagen"]
        const respuestaHttp = await fetch("../controller/REGISTROS.php", {
            method: "POST",
            
           
        });
        const nombreImagenSubida = await respuestaHttp.json();
        console.log("La imagen ha sido enviada y tiene el nombre de: " + nombreImagenSubida);
    } */
  document.getElementById("frmio").addEventListener(
    "submit",
    function (e) {
      var image = $canvas.toDataURL(); // data:image/png....
      document.getElementById("base64BPM").value = image;
    },
    false,
  );
};

// funcion para calcular porcentaje en formulario verificacion de dotacion y BPM  --------------------------//----------
function porcentajeBPM() {
  const selectedOptions = document.getElementById("selectFrenteBPM").selectedOptions;
  const porcentajeFijo = 5.555; // Porcentaje fijo para cada opción seleccionada
  let porcentajeTotal = 100; // Comenzamos con un 100%

  // Iteramos sobre las opciones seleccionadas
  Array.from(selectedOptions).forEach((option) => {
    // Restamos 7.14 por cada opción seleccionada
    porcentajeTotal -= porcentajeFijo;
  });

  // Asegurarnos de que el porcentaje no sea menor que 0
  porcentajeTotal = Math.max(porcentajeTotal, 0);

  // Actualizamos el campo de porcentaje con el valor calculado
  document.getElementById("pcBPM").value = porcentajeTotal.toFixed(1); // Redondeamos a 1 decimales
}

//--------------------------------------------------------------//------------------------------------------------------//----------------------

//---------- funcion para la firma en el formulario auditoria proceso----//-------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("firmaAuditoria");
  const ctx = canvas.getContext("2d");
  const clearBtn = document.getElementById("clearBtnAuditoria");
  const base64Input = document.getElementById("base64Auditoria");
  const enviarBtn = document.getElementById("controlEnviar"); // Botón que realmente hace submit

  let drawing = false;
  let lastPos = { x: 0, y: 0 };

  // Estilos del pincel
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  // Obtener posición del mouse
  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  // Obtener posición táctil
  function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }

  // Empezar a dibujar
  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    lastPos = getMousePos(e);
  });

  canvas.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      drawing = true;
      lastPos = getTouchPos(e);
    },
    { passive: false },
  );

  // Dejar de dibujar
  canvas.addEventListener("mouseup", () => {
    drawing = false;
  });

  canvas.addEventListener(
    "touchend",
    (e) => {
      e.preventDefault();
      drawing = false;
    },
    { passive: false },
  );

  // Dibujar mientras se mueve
  canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
      const mousePos = getMousePos(e);
      drawLine(lastPos, mousePos);
      lastPos = mousePos;
    }
  });

  canvas.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      if (drawing) {
        const touchPos = getTouchPos(e);
        drawLine(lastPos, touchPos);
        lastPos = touchPos;
      }
    },
    { passive: false },
  );

  // Función para dibujar línea
  function drawLine(from, to) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  // Limpiar firma
  clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    base64Input.value = "";
  });

  // Guardar firma cuando se hace clic en el botón de envío
  enviarBtn?.addEventListener("click", () => {
    /* if (isCanvasBlank(canvas)) {
       alert("Por favor, firme en el campo de firma.");
       return;
     }
 */
    const base64Image = canvas.toDataURL();
    base64Input.value = base64Image;
    // console.log("📌 Firma guardada:", base64Image);
  });

  // Validar si el canvas está vacío
  function isCanvasBlank(c) {
    const blank = document.createElement("canvas");
    blank.width = c.width;
    blank.height = c.height;
    return c.toDataURL() === blank.toDataURL();
  }
});

//-------------------------------------------------------------------------------------//---------------------------------------------------------------------------------//--------------------

// Constante con áreas y superficies inspeccion operativa POES
const Area = {
  "ENFRIAMIENTO Y EMPAQUE DE VISCERAS": [
    "Rejilla caída de víscera",
    "Mesas de recepción",
    "Baldes de recolección de víscera",
    "Conos metálicos",
    "Mesas de embandejado",
    "Recipientes (tazas inox y/o baldes)",
    "Grameras",
    "Desinfección de superficies y ambientes",
    "Guantes metálicos",
    "Cuchillos, Chairas",
    "Termómetro de Punzón",
    "Delantales",
  ],
  "ENFRIAMIENTO Y EMPAQUE DE CANAL": [
    "Descolgador de pollo",
    "Banda de cangilones entrada de canal al chiller",
    "Escurridor de tambor",
    "Grameras",
    "Mesas de recibo de canal",
    "Delantales",
    "Bandeja de ingreso de canal a prechiller",
    "seleccionadora (banda y pateadora de teflón)",
    "Cajones de empaque de producto",
    "Embudos",
    "Pala de hielo",
    "Desinfección de superficies y ambientes",
    "Tijeras",
    "Termómetro de Punzón",
    "Banda escurridor salida chiller",
  ],
  "DESPRESE Y MARINADO": [
    "Banda de Cangilones",
    "Banda de empaque",
    "Banda transportadora de presas",
    "Cuchillos, chairas",
    "Despresadora automatica (cuchilla y guías metálicas)",
    "Despresadora manual (cuchilla y guías metálicas)",
    "Marinadora de presa (agujas, banda, cortinas y pie de bloque)",
    "Guantes metálicos",
    "Mesas",
    "Recipientes (tazas inox y/o baldes)",
    "Delantales",
    "Grameras",
    "Desinfección de superficies y ambientes",
    "Termómetro de Punzón",
  ],
  "FILETEO DE POLLO": [
    "Cuchillos, chairas",
    "Tablas de teflón",
    "Recipientes (tazas inox y/o baldes)",
    "Guantes metálicos",
    "Mesas de corte",
    "Deshuesador",
    "Soporte Grameras",
    "Grameras",
    "Desinfección de superficies y ambientes",
    "Delantales",
    "Termómetro de Punzón",
  ],
  "DESPRESE Y FILETEO DE PAVO": [
    "Asentador",
    "Banda transportadora de presas",
    "Campanas Protectoras de Antebrazo",
    "Mesas despresado (conos)",
    "Mesas de fileteo",
    "Cuchillos, chairas",
    "Mesas de empaque",
    "Sierra",
    "Grameras",
    "Tablas de teflón",
    "Recipientes (tazas inox y/o baldes)",
    "Desinfección de superficies y ambientes",
    "Guantes metálicos",
    "Delantales",
    "Termómetro de Punzón",
  ],
  "POST PROCESOS": [
    "Banda de pinchos",
    "Tumbler",
    "Banda de conos",
    "Embudos",
    "Recipientes (tazas inox y/o baldes)",
    "Grameras",
    "Mesas",
    "Banda transportadora de presas",
    "Formadora de hamburguesas",
    "Despresadora manual (cuchilla y guías metálicas)",
    "Guantes metálicos",
    "Desinfección de superficies y ambientes",
    "Delantales",
    "Termómetro de Punzón",
  ],
  EVISCERACION: [
    "Pistola Succión Pulmones",
    "Pistola Extractora de Cloaca",
    "Pistola Destronconadora",
    "Peladora de mollejas (rodillos)",
    "Mesa de recuperación",
    "Mesa de inspección",
    "Mesa de colgado",
    "Maquina de quiebre y corta cuello",
    "Guantes metálicos",
    "Extractora tráquea y buche (cabezal)",
    "Extractora de Pulmones",
    "Extractora de cloaca (Cuchilla, Guía de canal)",
    "Evisceradora (sujetador de canal, guía de posición, paleta de remoción)",
    "Delantales",
    "Cuchillos, chairas",
    "Cortadora de Cabeza",
    "Canaleta de evisceración (separación de vísceras)",
    "Bandeja tolerancia cero",
    "Banda Transportadora de Pavo",
    "Banda de Cangilones",
  ],
  "CARNES MOLIDAS": [
    "Delantales",
    "Desinfección de superficies y ambientes",
    "Espátulas",
    "Molino (Baader)",
    "Quebrantador (citalsa)",
    "Quebrantador (lima)",
    "Termómetro de Punzón",
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const selectArea = document.getElementById("Area");

  if (selectArea) {
    selectArea.addEventListener("change", cargarSuperficies);
  } else {
    console.error("El elemento <select> con id 'area' no se encontró en el DOM.");
  }
});

function cargarSuperficies(event) {
  const areaSeleccionada = event.target.value || document.getElementById("Area").value;
  const contenedor = document.getElementById("contenedorCheckboxes");

  // Limpiar el contenedor antes de agregar nuevos checkboxes
  contenedor.innerHTML = "";

  // Verificar que el área seleccionada es válida
  console.log("Área seleccionada:", `"${areaSeleccionada}"`);
  if (!areaSeleccionada) {
    console.warn("No se ha seleccionado ninguna área.");
    return;
  }

  if (!(areaSeleccionada in Area)) {
    console.error(`El área seleccionada "${areaSeleccionada}" no existe en el objeto Area.`);
    return;
  }

  // Generar los checkboxes
  Area[areaSeleccionada].forEach((superficie) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "superficies"; // Mismo nombre para capturarlos como un array
    checkbox.value = superficie;
    checkbox.id = superficie.replace(/\s+/g, "_"); // Reemplazar espacios con _ para IDs válidos

    // Escuchar cambios en el estado del checkbox
    checkbox.addEventListener("change", function () {
      actualizarSuperficiesData();
      calcularPorcentajeInspeccion();
    });

    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = superficie;
    label.style.marginLeft = "5px";

    const div = document.createElement("div");
    div.style.marginBottom = "5px";
    div.appendChild(checkbox);
    div.appendChild(label);

    contenedor.appendChild(div);
  });

  console.log("Checkboxes generados correctamente.");

  // Asegurarse de que se actualice el porcentaje después de la carga inicial
  actualizarSuperficiesData();
  calcularPorcentajeInspeccion();
}

function calcularPorcentajeInspeccion() {
  const checkboxes = document.querySelectorAll('#contenedorCheckboxes input[type="checkbox"]');
  const seleccionados = document.querySelectorAll(
    '#contenedorCheckboxes input[type="checkbox"]:checked',
  );

  let porcentaje = 100;

  if (checkboxes.length > 0) {
    porcentaje = 100 - (seleccionados.length / checkboxes.length) * 100;
  }

  document.getElementById("porcent").value = porcentaje.toFixed(1) + "%";
}

function actualizarSuperficiesData() {
  const inputSuperficies = document.getElementById("superficiesInput");
  const checkboxes = document.querySelectorAll('input[name="superficies"]');
  const superficiesData = {};

  checkboxes.forEach((checkbox) => {
    const superficie = checkbox.value.trim();
    const estado = checkbox.checked ? 0 : 1;
    superficiesData[superficie] = estado;
  });

  const jsonSuperficies = JSON.stringify(superficiesData);
  console.log("✅ JSON que se va a enviar:", jsonSuperficies);
  inputSuperficies.value = jsonSuperficies;
}

// Ejecutar cuando cambie un checkbox
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("contenedorCheckboxes");

  if (!contenedor) {
    console.error("❌ Error: No se encontró #contenedorCheckboxes.");
    return;
  }

  contenedor.addEventListener("change", function () {
    actualizarSuperficiesData();
    calcularPorcentajeInspeccion();
  });
});

//------------//--firma para el poes---///------------

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("firmaCorrectivo");
  const ctx = canvas.getContext("2d");
  const clearBtn = document.getElementById("clearBtnCorrectivo");
  const base64Input = document.getElementById("base64Correctivo");
  const enviarBtn = document.getElementById("controlEnviar");

  if (!canvas || !ctx || !clearBtn || !base64Input || !enviarBtn) {
    console.error("❌ Faltan elementos importantes.");
    return;
  }

  let drawing = false;
  let lastPos = { x: 0, y: 0 };

  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }

  function drawLine(from, to) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    lastPos = getMousePos(e);
  });

  canvas.addEventListener("mouseup", () => {
    drawing = false;
  });

  canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
      const mousePos = getMousePos(e);
      drawLine(lastPos, mousePos);
      lastPos = mousePos;
    }
  });

  canvas.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      drawing = true;
      lastPos = getTouchPos(e);
    },
    { passive: false },
  );

  canvas.addEventListener(
    "touchend",
    (e) => {
      e.preventDefault();
      drawing = false;
    },
    { passive: false },
  );

  canvas.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      if (drawing) {
        const touchPos = getTouchPos(e);
        drawLine(lastPos, touchPos);
        lastPos = touchPos;
      }
    },
    { passive: false },
  );

  clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    base64Input.value = "";
    console.log("🧽 Firma borrada");
  });

  // 👉 Detectamos cuando el usuario intenta enviar
  enviarBtn.addEventListener("click", () => {
    const base64Image = canvas.toDataURL();

    base64Input.value = base64Image;
    // console.log("📸 Imagen en base64 guardada:", base64Image);
  });

  function isCanvasBlank(c) {
    const blank = document.createElement("canvas");
    blank.width = c.width;
    blank.height = c.height;
    return c.toDataURL() === blank.toDataURL();
  }
});

//------------------------------------------------------//--------------------------------------------------------------------------------------------------------
// script para deshabilitar algunos inputs en Defectos canal salida chiller

document.addEventListener("DOMContentLoaded", function () {
  // Obtén los elementos
  const tipoAveSelect = document.getElementById("tipoAve");
  const parchudoInput = document.getElementById("parchudo");
  const pigmentacionInput = document.getElementById("pigmentacion");
  const canalCuticulaInput = document.getElementById("canalCuticula");

  // Función para habilitar o deshabilitar los inputs y aplicar estilos
  function toggleInputs() {
    // Verifica si "PC" está seleccionado en el select
    if (tipoAveSelect.value === "PC") {
      parchudoInput.disabled = false; // Habilita el input Parchudo
      pigmentacionInput.disabled = false; // Habilita el input Pigmentación
      canalCuticulaInput.disabled = true; // Deshabilita el input Pigmentación

      // Elimina el estilo de deshabilitado (estilos cuando están habilitados)
      parchudoInput.style.backgroundColor = "";
      parchudoInput.style.border = "";
      parchudoInput.style.color = "";
      parchudoInput.style.cursor = "";

      pigmentacionInput.style.backgroundColor = "";
      pigmentacionInput.style.border = "";
      pigmentacionInput.style.color = "";
      pigmentacionInput.style.cursor = "";

      canalCuticulaInput.style.backgroundColor = "#e0e0e0";
      canalCuticulaInput.style.border = "1px solid red";
      canalCuticulaInput.style.color = "#888";
      canalCuticulaInput.style.cursor = "not-allowed";
    } else {
      parchudoInput.disabled = true; // Deshabilita el input Parchudo
      pigmentacionInput.disabled = true; // Deshabilita el input Pigmentación
      canalCuticulaInput.disabled = false; // Habilita el input canalCuticula

      // Aplica el estilo de deshabilitado (estilos cuando están bloqueados)
      parchudoInput.style.backgroundColor = "#e0e0e0";
      parchudoInput.style.border = "1px solid red";
      parchudoInput.style.color = "#888";
      parchudoInput.style.cursor = "not-allowed";

      pigmentacionInput.style.backgroundColor = "#e0e0e0";
      pigmentacionInput.style.border = "1px solid red";
      pigmentacionInput.style.color = "#888";
      pigmentacionInput.style.cursor = "not-allowed";
    }
  }

  // Llama la función inicialmente en caso de que ya se haya seleccionado un valor
  toggleInputs();

  // Escucha el evento de cambio en el select
  tipoAveSelect.addEventListener("change", toggleInputs);
});

//---------------------------------------------------------------------//----------------------------------------------------------
//FUNCION PARA DEFECTOS CANAL SALIDA CHILLER
document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos los inputs y el campo del porcentaje
  const decomisoParcialInput = document.getElementById("decomisoParcial");
  const pigmentacionInput = document.getElementById("pigmentacion");
  const hematomaPechugaInput = document.getElementById("hematomaPechuga");
  const hematomaPernilInput = document.getElementById("hematomaPernil");
  const hematomaAlaInput = document.getElementById("hematomaAla");
  const granjaPorcentajeInput = document.getElementById("granjaPorcentaje");

  // Función para actualizar el porcentaje
  function actualizarPorcentaje() {
    // Comienza con el valor de 100
    let nuevoPorcentaje = 100;

    // Sumar todos los valores de los inputs, si el valor es válido
    let totalDescuento = 0;

    // Sumar los valores de cada input (si tiene un valor numérico válido)
    totalDescuento += parseFloat(decomisoParcialInput.value) || 0;
    totalDescuento += parseFloat(pigmentacionInput.value) || 0;
    totalDescuento += parseFloat(hematomaPechugaInput.value) || 0;
    totalDescuento += parseFloat(hematomaPernilInput.value) || 0;
    totalDescuento += parseFloat(hematomaAlaInput.value) || 0;

    // Restar la suma de los valores del total (100)
    nuevoPorcentaje -= totalDescuento;

    // Asegúrate de que el porcentaje no sea menor que 0
    if (nuevoPorcentaje < 0) {
      nuevoPorcentaje = 0;
    }

    // Actualiza el valor del input del porcentaje
    granjaPorcentajeInput.value = nuevoPorcentaje.toFixed(0);
  }

  // Añadimos un evento 'input' para cada campo
  decomisoParcialInput.addEventListener("input", actualizarPorcentaje);
  pigmentacionInput.addEventListener("input", actualizarPorcentaje);
  hematomaPechugaInput.addEventListener("input", actualizarPorcentaje);
  hematomaPernilInput.addEventListener("input", actualizarPorcentaje);
  hematomaAlaInput.addEventListener("input", actualizarPorcentaje);
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos los inputs y el campo del porcentaje
  const parchudoInput = document.getElementById("parchudo");
  const fracturaAlaInput = document.getElementById("fracturaAla");
  const puntaAlaInput = document.getElementById("puntaAla");
  const canalVisceraInput = document.getElementById("canalViscera");
  const canalplumasInput = document.getElementById("canalPlumas");
  const canalCuticulaInput = document.getElementById("canalCuticula");
  const dañoEquipoInput = document.getElementById("dañoEquipo");
  const defectosPorcentajeInput = document.getElementById("defectosPorcentaje");

  // Función para actualizar el porcentaje
  function actualizarPorcentaje() {
    // Comienza con el valor de 100
    let nuevoPorcentaje = 100;

    // Sumar todos los valores de los inputs, si el valor es válido
    let totalDescuento = 0;

    // Sumar los valores de cada input (si tiene un valor numérico válido)
    totalDescuento += parseFloat(parchudoInput.value) || 0;
    totalDescuento += parseFloat(fracturaAlaInput.value) || 0;
    totalDescuento += parseFloat(puntaAlaInput.value) || 0;
    totalDescuento += parseFloat(canalVisceraInput.value) || 0;
    totalDescuento += parseFloat(canalplumasInput.value) || 0;
    totalDescuento += parseFloat(canalCuticulaInput.value) || 0;
    totalDescuento += parseFloat(dañoEquipoInput.value) || 0;

    // Restamos la suma de los valores del total (100)
    nuevoPorcentaje -= totalDescuento;

    // Asegúrate de que el porcentaje no sea menor que 0
    if (nuevoPorcentaje < 0) {
      nuevoPorcentaje = 0;
    }

    // Actualiza el valor del input del porcentaje
    defectosPorcentajeInput.value = nuevoPorcentaje.toFixed(0); // Se mantiene sin decimales
  }

  // Añadimos un evento 'input' para cada campo
  parchudoInput.addEventListener("input", actualizarPorcentaje);
  fracturaAlaInput.addEventListener("input", actualizarPorcentaje);
  puntaAlaInput.addEventListener("input", actualizarPorcentaje);
  canalVisceraInput.addEventListener("input", actualizarPorcentaje);
  canalplumasInput.addEventListener("input", actualizarPorcentaje);
  canalCuticulaInput.addEventListener("input", actualizarPorcentaje);
  dañoEquipoInput.addEventListener("input", actualizarPorcentaje);
});

document.addEventListener("DOMContentLoaded", function () {
  // Obtener los inputs de porcentaje individual y global
  const granjaPorcentajeInput = document.getElementById("granjaPorcentaje");
  const defectosPorcentajeInput = document.getElementById("defectosPorcentaje");
  const porcentajeGlobalInput = document.getElementById("porcentajeGlobal");

  function actualizarPorcentajeGlobal() {
    let granjaPorcentaje = parseFloat(granjaPorcentajeInput.value) || 0;
    let defectosPorcentaje = parseFloat(defectosPorcentajeInput.value) || 0;

    // console.log("Granja:", granjaPorcentaje, "Defectos:", defectosPorcentaje);

    // Calculamos el promedio de los dos porcentajes
    let porcentajeGlobal = (granjaPorcentaje + defectosPorcentaje) / 2;

    // Validamos y mostramos el resultado
    porcentajeGlobalInput.value = porcentajeGlobal.toFixed(0);
  }

  // Escuchar cambios en los inputs que calculan los porcentajes
  function agregarEventos() {
    document.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", function () {
        // Esperamos un pequeño tiempo para asegurarnos de que los valores se han actualizado
        setTimeout(actualizarPorcentajeGlobal, 100);
      });
    });
  }

  // Ejecutar la función al cargar la página para inicializar el valor
  actualizarPorcentajeGlobal();
  agregarEventos();
});

//-----------------------------------------------------------------------------///----------------------------------------------------------------
//FUNCION PARA PUNTOS DE DESINFECCION
function cambiarColor(selectElement) {
  var valorSeleccionado = selectElement.value;

  // Restablecer el color de fondo por defecto
  selectElement.style.backgroundColor = ""; // Restaura el fondo predeterminado

  // Aplicar el color según la opción seleccionada
  if (valorSeleccionado === "CUMPLE") {
    selectElement.style.backgroundColor = "lightgreen"; // Fondo verde para 'CUMPLE'
  } else if (valorSeleccionado === "NO CUMPLE") {
    selectElement.style.backgroundColor = "lightcoral"; // Fondo rojo para 'NO CUMPLE'
  } else if (valorSeleccionado === "NO CUMPLE POR LIMPIEZA") {
    selectElement.style.backgroundColor = "lightblue"; // Fondo amarillo para 'NO CUMPLE POR LIMPIEZA'
  } else if (valorSeleccionado === "N/A") {
    selectElement.style.backgroundColor = "gray"; // Fondo amarillo para 'NO APLICA'
  }
}

//--------------------------------------------------------------------------------------------------------------------------//--------------------------------------------------------------
// funciones para promediar y generar los inputs  de las presas en el formulario control peso producto adobado frisby
document.addEventListener("DOMContentLoaded", () => {
  const configuraciones = [
    {
      contenedorId: "contenedor-inputs",
      nombre: "numero_",
      inputId: "input_",
      rango: [200, 270],
      promedioId: "cumplimientoFrisby",
      fueraRangoId: "pechugasNocumple",
    },
    {
      contenedorId: "contenedor-inputs2",
      nombre: "numero2_",
      inputId: "input2_",
      rango: [160, 200],
      promedioId: "cumplimientoFrisby2",
      fueraRangoId: "contramuslosNocumplen",
    },
    {
      contenedorId: "contenedor-inputs3",
      nombre: "numero3_",
      inputId: "input3_",
      rango: [115, 140],
      promedioId: "cumplimientoFrisby3",
      fueraRangoId: "muslosNocumplen",
    },
    {
      contenedorId: "contenedor-inputs4",
      nombre: "numero4_",
      inputId: "input4_",
      rango: [115, 150],
      promedioId: "cumplimientoFrisby4",
      fueraRangoId: "alasNocumplen",
    },
  ];

  configuraciones.forEach(({ contenedorId, nombre, inputId, rango, promedioId, fueraRangoId }) => {
    generarInputs(contenedorId, nombre, inputId, rango, promedioId, fueraRangoId);
  });
});

function generarInputs(contenedorId, nombreInput, inputId, rango, promedioId, fueraRangoId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.style.display = "grid";
  contenedor.style.gridTemplateColumns = "repeat(11, 1fr)";
  contenedor.style.gap = "5px";
  contenedor.style.marginTop = "20px";

  let noCumplenRango = 0;
  const inputValues = {};

  for (let i = 1; i <= 100; i++) {
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "display:flex;flex-direction:column;align-items:center;width:100%";

    const label = document.createElement("label");
    label.textContent = `${i}`;
    label.style.cssText = "font-size:14px;margin-bottom:4px;text-align:center";

    const input = document.createElement("input");
    input.type = "number";
    input.name = `${nombreInput}${i}`;
    input.id = `${inputId}${i}`;
    input.style.cssText =
      "padding:8px;border:1px solid #ccc;border-radius:6px;font-size:15px;width:80%;height:40px";

    input.addEventListener("input", () => {
      const valor = parseFloat(input.value);
      const prevValor = inputValues[i] ?? null;

      if (input.value === "") return;

      if (valor < rango[0] || valor > rango[1]) {
        input.style.backgroundColor = "lightcoral";
        if (prevValor === null || (prevValor >= rango[0] && prevValor <= rango[1])) {
          noCumplenRango++;
        }
      } else {
        input.style.backgroundColor = "lightgreen";
        if (prevValor !== null && (prevValor < rango[0] || prevValor > rango[1])) {
          noCumplenRango--;
        }
      }

      inputValues[i] = valor;
      document.getElementById(fueraRangoId).value = noCumplenRango;
      calcularPromedio(inputId, promedioId);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    contenedor.appendChild(wrapper);
  }
}

function calcularPromedio(inputIdPrefix, promedioId) {
  let suma = 0,
    contador = 0;
  document.querySelectorAll(`[id^="${inputIdPrefix}"]`).forEach((input) => {
    const valor = parseFloat(input.value);
    if (!isNaN(valor) && valor !== 0) {
      suma += valor;
      contador++;
    }
  });

  const promedio = contador ? (suma / contador).toFixed(1) : "0";
  const campo = document.getElementById(promedioId);
  if (campo) campo.value = promedio;
}

//---- funcion para generar los checkboxes de aspectos en auditoria de cuartos de almacenamiento ---------------//--------------------------------------------------------------------
const categorias = {
  "ORDEN Y ASEO": [
    "El area se encuentra limpia y ordenada, no hay condensacion",
    "Los utensilios de aseo estan en buen estado y en su sitio cuando no se estan utilizando",
    "Cumplen con el lavado y desinfeccion segun cronograma",
  ],
  "MANEJO DE PRODUCTO": [
    "La temperatura del producto en almacenamiento y despacho cumple con lo exigido en normatividad vigente (<4°C refrigerado y -18°C congelado)",
    "En el cuarto se evidencia buena circulación y capacidad moderada",
    "El producto que cae al suelo es desinfectado en las pocetas del área",
    "El rotulo del empaque concuerda con la referencia empacada y contiene trazabilidad",
    "El almacenamienTo cumple con las rotaciones adecuadas, (PEPS)",
    "Las canasta para empaque de producto se encuentran limpia, se usa base canasta o estiba.",
  ],
  "DISPOSICION DE UTENSILIOS": [
    "Los implementos de trabajo se les da el uso adecuado y se almacenan correctamente (grameras, cuchillos, baldes)",
    "Todos los utensilios empleados (Canastas, basecanastas,  carros de transporte interno) permanecen limpios y en buen estado",
  ],
  "DISPOSICION DE RESIDUOS SOLIDOS": [
    "El piso esta libre de suciedad (corbatas, material de empaque, residuos organicos)",
    "Los canales de desagüe  se encuentran limpios, libres de residuos orgánicos y protegidas con sus respectivas rejillas",
  ],
  "DISPOSICION DE RESIDUOS LIQUIDOS": ["El piso esta sin lixiviados."],
};

document.addEventListener("DOMContentLoaded", function () {
  const selectArea = document.getElementById("aspectosAlmacenamiento");
  const controlEnviar = document.getElementById("controlEnviar");

  if (selectArea) selectArea.addEventListener("change", cargarAspectos);
  if (controlEnviar) controlEnviar.addEventListener("click", actualizarAspectosData);
});

let categoriaActual = null;
const estadoCheckboxes = {};

function cargarAspectos(event) {
  const nuevaCategoria = event.target.value;

  // Guardar estado de la categoría actual ANTES de cambiar
  guardarEstadoActual();

  const contenedor = document.getElementById("contenedorCheckboxes2");
  contenedor.innerHTML = "";

  if (!categorias[nuevaCategoria]) return;

  // Cargar checkboxes para la nueva categoría
  categorias[nuevaCategoria].forEach((aspecto) => {
    const checkboxId = aspecto.replace(/\s+/g, "_");
    const div = document.createElement("div");
    div.style.marginBottom = "5px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.value = aspecto;

    // Establecer estado inicial (usando el valor guardado o false por defecto)
    checkbox.checked = estadoCheckboxes[nuevaCategoria]?.[aspecto] || false;

    checkbox.addEventListener("change", function () {
      if (!estadoCheckboxes[nuevaCategoria]) {
        estadoCheckboxes[nuevaCategoria] = {};
      }
      estadoCheckboxes[nuevaCategoria][aspecto] = this.checked;
      actualizarAspectosData();
    });

    const label = document.createElement("label");
    label.htmlFor = checkboxId;
    label.textContent = aspecto;
    label.style.marginLeft = "5px";

    div.appendChild(checkbox);
    div.appendChild(label);
    contenedor.appendChild(div);
  });

  categoriaActual = nuevaCategoria;
  actualizarAspectosData();
}

function guardarEstadoActual() {
  if (!categoriaActual) return;

  const checkboxes = document.querySelectorAll('#contenedorCheckboxes2 input[type="checkbox"]');
  estadoCheckboxes[categoriaActual] = {};

  checkboxes.forEach((checkbox) => {
    estadoCheckboxes[categoriaActual][checkbox.value] = checkbox.checked;
  });
}

function actualizarAspectosData() {
  const inputAspectos = document.getElementById("superficiesInput2");
  if (!inputAspectos) return;

  const datosAspectos = {};

  // Asegurarse de incluir TODOS los aspectos de TODAS las categorías
  for (const categoria in categorias) {
    for (const aspecto of categorias[categoria]) {
      // Si no existe en el estado, asumir no marcado (1)
      const estado = estadoCheckboxes[categoria]?.[aspecto] ?? false;
      datosAspectos[aspecto] = estado ? 0 : 1;
    }
  }

  const jsonAspectos = JSON.stringify(datosAspectos);
  inputAspectos.value = jsonAspectos;
  //console.log("✅ JSON final generado:", jsonAspectos);
}
//---------------------------------------------------------------- Frecuencia Inspeccion----------------------------------//----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

  // ==========================
  // 1️⃣ Selector dependiente
  // ==========================
  const areasPorPlanta = {
    "DERIVADOS CÁRNICOS PEREIRA": [
      "ALISTAMIENTO, MEZCLADO Y MOLIENDA MPC",
      "ALMACENAMIENTO DE EMPAQUES",
      "ALMACENAMIENTO DE PT",
      "COCCION",
      "CUARTO DE PRODUCTO EN PROCESO",
      "CUARTO MPC 1, 2 Y 3",
      "EMBUTIDO",
      "ESCALAS Y FILTROS SANITARIOS",
      "LOCKERS Y VESTIERES",
      "PESAJE DE MPNC",
      "TERMOFORMADO - EMBALAJE",
      "TUNEL DE CHOQUE",
      "TUNEL Y ALMACENAMIENTO DE CANASTILLAS",
      "ZONA DE PICADO Y TAJADO"
    ],
    "BENEFICIO Y PRODUCCIÓN PEREIRA": [
      "ALMACENAMIENTO",
      "DESPACHOS",
      "DESPRESE Y MARINADO",
      "ENFRIAMIENTO DE CANAL",
      "ENFRIAMIENTO DE VISCERAS",
      "EVISCERACION",
      "FILETEO DE PAVO",
      "FILETEO DE POLLO",
      "LAVADO DE CANASTILLAS",
      "FILETEO Y MARINADO DE PAVOS",
      "PLANTA DE HIELO - SALMUERA",
      "PLATAFORMA",
      "POST PROCESO"
    ]
  };

  const tipoPlantaSelect = document.getElementById("tipoPlantaSelect");
  const procesoSelect = document.getElementById("procesoSelect");
  const nivelSelect = document.getElementById("nivelInspeccion");
  const tbody = document.querySelector("#tblFrecuenciaDatos tbody");
  const btnCargarFrecuenciaDatos = document.querySelector(".btnCargarFrecuenciaDatos");
  const form = document.getElementById("formFrecuenciaInspeccion");

  // ==========================
  // 1️⃣.1 Llenar procesos según la planta
  // ==========================
  tipoPlantaSelect.addEventListener("change", function () {
    const tipoSeleccionado = this.value;
    procesoSelect.innerHTML = '<option value="" selected hidden>Selecciona Proceso</option>';

    if (areasPorPlanta[tipoSeleccionado]) {
      areasPorPlanta[tipoSeleccionado].forEach(area => {
        const option = document.createElement("option");
        option.value = area;
        option.textContent = area;
        procesoSelect.appendChild(option);
      });
    }
  });

  // ==========================
  // 2️⃣ Cargar datos en la tabla
  // ==========================
  btnCargarFrecuenciaDatos.addEventListener("click", function () {
    const planta = tipoPlantaSelect.value;
    const nivel = nivelSelect.value;
    const proceso = procesoSelect.value;

    // 1. Validación de filtros
    if (!planta || !nivel || !proceso) {
        alert("¡Faltan datos! Selecciona Planta, Proceso y Nivel de Inspección.");
        return;
    }

    // 2. Ejecución de la petición fetch
    fetch("../models/inspect_frecuencia.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // Envía los tres parámetros requeridos por tu PHP
        body: `planta=${encodeURIComponent(planta)}&proceso=${encodeURIComponent(proceso)}&frecuencia=${encodeURIComponent(nivel)}`
        // Nota: En el body anterior usaste 'frecuencia' para el nivel, lo mantengo aquí para que coincida con tu PHP.
    })
    .then(res => res.text().then(text => {
        // Manejo de respuesta JSON (incluyendo manejo de errores no-JSON)
        try {
            return JSON.parse(text);
        } catch (err) {
            console.error("⛔ Respuesta no-JSON desde inspect_frecuencia.php:", text);
            throw new Error("El servidor no devolvió una respuesta JSON válida.");
        }
    }))
    .then(data => {
        // 3. Normalización y verificación de los registros
        const registros = Array.isArray(data)
            ? data
            : (data.sample && Array.isArray(data.sample))
              ? data.sample
              : null;

        if (!registros) {
            console.error("Respuesta inesperada de inspect_frecuencia.php:", data);
            if (data && data.mensaje) alert(`Error del servidor: ${data.mensaje}`);
            else alert("Respuesta inesperada del servidor. Revisa la consola.");
            return;
        }

        // 4. Renderizado de la tabla
        tbody.innerHTML = ""; // Limpia la tabla
        
        if (registros.length === 0) {
            tbody.innerHTML = "<tr><td colspan='11' class='text-center'>No hay registros para los filtros seleccionados.</td></tr>";
            console.log("No se encontraron registros.");
            return;
        }

        console.log(`✅ ${registros.length} registros cargados.`);

        // Renderiza cada registro en una fila
          registros.forEach((item, index) => {
            // Nota: Corregí el campo 'incompleto' a 'incompletos' si la columna del objeto JSON es 'incompletos' (como en el segundo bloque)
            // Si el campo real es 'incompleto' en el JSON, ajusta la línea <td>${item.incompletos || 0}</td>
            tbody.innerHTML += `
                <tr>
                  <td>${item.planta || ""}</td>
                  <td>${item.area || ""}</td>
                  <td>${item.detalle_material || ""}</td>
                  <td>${item.estado || ""}</td>
                  <td>${item.tipo_material || ""}</td>
                  <td>${item.frecuencia_inspeccion || ""}</td>
                  <td><input type="number" min="0" max="9999" class="form-control inputCantidad" value="${item.cantidad}"></td>
                  <td><input type="number" min="0" max="9999" class="form-control inputAusentes" value="${item.ausentes}"></td>
                  <td><input type="number" min="0" max="9999" class="form-control inputIncompletos" value="${item.incompletos}"></td>          
                </tr>
            `;
          });
    })
    .catch(err => {
        console.error("❌ Error en la operación FETCH:", err);
        alert("Error al cargar los datos. Revisa la consola para detalles.");
    });
});
});
$(document).ready(function() {
    // Inicialización de tu DataTable aquí (si no está ya)
    // const tabla = $("#tblFrecuenciaDatos").DataTable({ ... }); 

    // Forzar estilos después de la carga
    $("#tblFrecuenciaDatos").on('draw.dt', function () {
        // Seleccionamos todos los inputs numéricos problemáticos dentro de la tabla
        $("#tblFrecuenciaDatos").find(".inputCantidad, .inputAusentes, .inputIncompletos").css({
            "width": "70px",
            "padding": "2px",
            "text-align": "left"
        });
    });

    // También forzar al cargar la página (por si acaso)
    $("#tblFrecuenciaDatos").find(".inputCantidad, .inputAusentes, .inputIncompletos").css({
        "width": "70px",
        "padding": "2px",
        "text-align": "left"
    });
});

/* FUNION PARA TARER CEDULA Y NOMBRE DEL FORMATO 17*/
$(document).ready(function() {

  // 🔍 Función para buscar empleado por cédula
  function buscarEmpleado(inputId) {
    let cedula = $(inputId).val().trim();

    if (cedula !== '') {
      $.ajax({
        url: '../models/buscar_empleado.php', // ✅ revisa si necesitas ../models/
        type: 'POST',
        data: { cedula: cedula },
        dataType: 'json',
        success: function(response) {
          if (response.error) {
            $(inputId).val('NO ENCONTRADO');
          } else if (response.mostrar) {
            // ✅ muestra la respuesta en el mismo input
            $(inputId).val(response.mostrar);
          } else {
            $(inputId).val('SIN DATOS');
          }
        },
        error: function() {
          $(inputId).val('ERROR SERVIDOR');
        }
      });
    }
  }

  // 👂 Detectar cuando el input pierde el foco (blur)
  $('#nombreCalidadfrecuencia').on('blur', function() {
    buscarEmpleado('#nombreCalidadfrecuencia');
  });



});
  
// funcion manejar cambio de pagina y selector de no aplica en el formulario material extraño------------------------------------------//

$(document).ready(function () {
  const paginas = $(".pagina");
  let paginaActual = 0;

  function mostrarPagina(index) {
    paginas.hide(); // Oculta todas las páginas
    paginas.eq(index).show(); // Muestra solo la actual

    // Desactivar botones si estamos en inicio o final
    $("#btnAnterior").prop("disabled", index === 0);
    $("#btnSiguiente").prop("disabled", index === paginas.length - 1);
  }

  function paginaTieneTextareasVacios(index) {
    const pagina = $(".pagina").eq(index);
    const textareas = pagina.find("textarea:visible").not("[readonly]");
    let hayVacios = false;

    textareas.removeClass("campo-vacio");

    textareas.each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("campo-vacio");
        hayVacios = true;
      }
    });

    return hayVacios;
  }

  mostrarPagina(paginaActual);

  $("#btnSiguiente").on("click", function (e) {
    e.preventDefault();

    if (paginaTieneTextareasVacios(paginaActual)) {
      alert(
        "Por favor, completa todos los campos de observaciones antes de continuar a la siguiente pagina.",
      );
      return;
    }

    if (paginaActual < paginas.length - 1) {
      paginaActual++;
      mostrarPagina(paginaActual);
    }
  });

  $("#btnAnterior").on("click", function (e) {
    e.preventDefault();
    if (paginaActual > 0) {
      paginaActual--;
      mostrarPagina(paginaActual);
    }
  });
});
//---------------------------------------------------------------//-----------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  // Configuración de categorías (ID del select y ID del contenedor)
  const categorias = [
    { selectId: "categoriaAplicaAreas", contenedorId: "areasGeneral" },
    { selectId: "categoriaAplicaEquipos", contenedorId: "equipos" },
    { selectId: "categoriaAplicaInstalaciones", contenedorId: "instalacioness" },
    { selectId: "categoriaAplicaIntervenciones", contenedorId: "intervencionesMantenimiento" },
    { selectId: "categoriaAplicaPersonal", contenedorId: "personalLista" },
    { selectId: "categoriaAplicaSuperficies", contenedorId: "superficiesLista" },
    { selectId: "categoriaAplicaUtensilios", contenedorId: "utensiliosProceso" },
    { selectId: "categoriaAplicaProducto", contenedorId: "productoEnProceso" },
  ];

  // Función genérica para manejar el cambio en un select
  function manejarCambioCategoria(selectId, contenedorId) {
    const categoriaAplica = document.getElementById(selectId);
    const pagina = document.getElementById(contenedorId);

    if (!categoriaAplica || !pagina) return; // Si no existe, salir

    categoriaAplica.addEventListener("change", function () {
      const esNoAplica = this.value === "no";

      // 1. Checkboxes: Deshabilitar/marcar o habilitar
      const checkboxes = pagina.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
        checkbox.disabled = esNoAplica;
        if (esNoAplica) checkbox.checked = false;
      });

      // 2. Porcentajes: Cambiar a "N/A" o restaurar a 100.0
      const porcentajes = pagina.querySelectorAll('input[name^="porcentaje"]');
      porcentajes.forEach((input) => {
        input.value = esNoAplica ? "N/A" : "100.0";
      });

      // 3. Textareas: Deshabilitar/limpiar o habilitar
      const textareas = pagina.querySelectorAll("textarea");
      textareas.forEach((textarea) => {
        if (esNoAplica) {
          textarea.value = "N/A";
          textarea.readOnly = true;
          textarea.classList.add("na-estilo");
        } else {
          textarea.value = "";
          textarea.readOnly = false;
          textarea.classList.remove("na-estilo");
        }
      });
    });
  }

  // Aplicar la función a todas las categorías
  categorias.forEach((categoria) => {
    manejarCambioCategoria(categoria.selectId, categoria.contenedorId);
  });
});
//-------------------------------------------------------------------------------------------//--------------------------------------------------------------------------
// calculo de porcentajes formulario material extraño
document.addEventListener("DOMContentLoaded", function () {

  // Mapeo de plantas a áreas
  const areasPorPlanta = {
    "Derivados Carnicos Pereira": [
      "ALISTAMIENTO, MEZCLADO Y MOLIENDA MPC",
      "ALMACENAMIENTO DE EMPAQUES",
      "CUARTOS DE ALMACENAMIENTO DE PT", 
      "COCCION",
      "CUARTO DE PRODUCTO EN PROCESO",
      "CUARTO MPC 1, 2 Y 3",
      "EMBUTIDO",
      "ESCALAS Y FILTROS SANITARIOS",
      "LOCKERS Y VESTIERES",
      "PESAJE DE MPNC",
      "TERMOFORMADO - EMBALAJE",
      "TUNEL DE CHOQUE",
      "TUNEL Y ALMACENAMIENTO DE CANASTILLAS",
      "ZONA DE PICADO Y TAJADO",
    ],
    "Beneficio y Produccion Pereira": [
      "FILETEO Y MARINADO DE PAVOS",
      "DESPRESE Y MARINADO",
      "ENFRIAMIENTO DE VISCERAS",
      "PLANTA DE HIELO - SALMUERA",
      "POST PROCESO",
      "ALMACENAMIENTO",
      "ENFRIAMIENTO DE CANAL",
      "EVISCERACION",
      "PLATAFORMA",
      "FILETEO DE POLLO",
      "ALMACENAMIENTO",
      "DESPACHOS",
      "LAVADO DE CANASTILLAS",
      "CARNES MOLIDAS",
      "LOTEO",
      "PESAJE DE NMPC",
      "ALMACEN",
    ],
  };

  // Referencias a los selects por sus IDs
  const plantaSelect = document.getElementById("plantaChequeo");
  const areasSelect = document.getElementById("areasChequeo");

  if (!plantaSelect || !areasSelect) {
    console.warn("No se encontraron los selectores plantaChequeo o areasChequeo.");
    return;
  }

  // Escucha cambios en planta
  plantaSelect.addEventListener("change", function () {
    const planta = this.value;

    // Limpiar select de áreas
    areasSelect.innerHTML = '<option value="" selected hidden>Selecciona Área</option>';

    // Llenar select de áreas según la planta
    if (areasPorPlanta[planta]) {
      areasPorPlanta[planta].forEach(area => {
        const option = document.createElement("option");
        option.value = area;
        option.textContent = area;
        areasSelect.appendChild(option);
      });
    }
  });

});


document.addEventListener("DOMContentLoaded", function () {
  const inputsPorcentaje = document.querySelectorAll('input[name="porcentajeC[]"]');
  inputsPorcentaje.forEach((input) => aplicarEstiloPorcentaje(input));
  // Configuración centralizada de todas las categorías
  const config = {
    categorias: [
      {
        id: "areasGeneral",
        nombre: "AREAS GENERAL",
        selectorAplica: "categoriaAplicaAreas",
        porcentajeGeneralId: "porcentajeAreas",
        subareas: [
          {
            nombre: "Area",
            checkboxes: [
              "criterio1",
              "criterio2",
              "criterio3",
              "criterio4",
              "criterio5",
              "criterio6",
              "criterio99",
              "criterio100",
              "criterio101",
            ],
            porcentajeId: "porcentajeArea",
          },
          {
            nombre: "Gabinetes-Armarios",
            checkboxes: [
              "criterio7",
              "criterio9",
              "criterio10",
              "criterio11",
              "criterio12",
              "criterio13",
            ],
            porcentajeId: "porcentajeGabinetes",
          },
        ],
      },
      {
        id: "equipos",
        nombre: "EQUIPOS",
        selectorAplica: "categoriaAplicaEquipos",
        porcentajeGeneralId: "porcentajeEquipos",
        subareas: [
          {
            nombre: "Superficies Generales - Bandas Transportadoras",
            checkboxes: [
              "criterio14",
              "criterio15",
              "criterio16",
              "criterio17",
              "criterio18",
              "criterio19",
            ],
            porcentajeId: "porcentajeSuperficiesItem",
          },
          {
            nombre: "Integridad",
            checkboxes: ["criterio20", "criterio21", "criterio22", "criterio23", "criterio24"],
            porcentajeId: "porcentajeIntegridad",
          },
          {
            nombre: "Visualizadores y Tableros de Control",
            checkboxes: [
              "criterio25",
              "criterio26",
              "criterio27",
              "criterio28",
              "criterio29",
              "criterio30",
            ],
            porcentajeId: "porcentajeVisualizadores",
          },
        ],
      },
      {
        id: "instalacioness",
        nombre: "INSTALACIONES",
        selectorAplica: "categoriaAplicaInstalaciones",
        porcentajeGeneralId: "porcentajeInstalaciones",
        subareas: [
          {
            nombre: "Estado de techos y estructuras colgantes",
            checkboxes: [
              "criterio31",
              "criterio32",
              "criterio33",
              "criterio34",
              "criterio35",
              "criterio8",
            ],
            porcentajeId: "porcentajeEstadoTechos",
          },
          {
            nombre: "Integridad de paredes y pisos",
            checkboxes: [
              "criterio36",
              "criterio37",
              "criterio38",
              "criterio39",
              "criterio40",
              "criterio88",
              "criterio103",
            ],
            porcentajeId: "porcentajeIntegridadParedes",
          },
          {
            nombre: "Luminarias y Ventanas",
            checkboxes: ["criterio41", "criterio42", "criterio43", "criterio44"],
            porcentajeId: "porcentajeLuminarias",
          },
        ],
      },
      {
        id: "intervencionesMantenimiento",
        nombre: "INTERVENCIONES MANTENIMIENTO",
        selectorAplica: "categoriaAplicaIntervenciones",
        porcentajeGeneralId: "porcentajeIntervencionesMantenimiento",
        subareas: [
          {
            nombre: "Cultura de Inocuidad Mantenimiento",
            checkboxes: [
              "criterio45",
              "criterio46",
              "criterio47",
              "criterio48",
              "criterio49",
              "criterio50",
              "criterio51",
              "criterio52",
            ],
            porcentajeId: "porcentajeInocuidad",
          },
        ],
      },
      {
        id: "personalLista",
        nombre: "PERSONAL",
        selectorAplica: "categoriaAplicaPersonal",
        porcentajeGeneralId: "porcentajePersonal",
        subareas: [
          {
            nombre: "Objetos metálicos o quebradizos",
            checkboxes: [
              "criterio53",
              "criterio54",
              "criterio55",
              "criterio56",
              "criterio57",
              "criterio58",
            ],
            porcentajeId: "porcentajeObjetos",
          },
          {
            nombre: "Dotacions",
            checkboxes: ["criterio60", "criterio61", "criterio62", "criterio63", "criterio64"],
            porcentajeId: "porcentajeDotacion",
          },
        ],
      },
      {
        id: "superficiesLista",
        nombre: "SUPERFICIES",
        selectorAplica: "categoriaAplicaSuperficies",
        porcentajeGeneralId: "porcentajeSuperficies",
        subareas: [
          {
            nombre: "Mesas de proceso",
            checkboxes: ["criterio65", "criterio66", "criterio67", "criterio68", "criterio69"],
            porcentajeId: "porcentajeMesas",
          },
          {
            nombre: "Canastillas y Estibas",
            checkboxes: ["criterio70", "criterio71", "criterio72", "criterio102"],
            porcentajeId: "porcentajeCanastillas",
          },
        ],
      },
      {
        id: "utensiliosProceso",
        nombre: "UTENSILIOS DE PROCESO",
        selectorAplica: "categoriaAplicaUtensilios",
        porcentajeGeneralId: "porcentajeUtensiliosProceso",
        subareas: [
          {
            nombre: "Baldes - Tanques - Palas - Espatulas",
            checkboxes: ["criterio73", "criterio74", "criterio75", "criterio76", "criterio77"],
            porcentajeId: "porcentajeBaldes",
          },
          {
            nombre: "Cuchillos - Chairas - Asentadores - Esterilizadores",
            checkboxes: [
              "criterio78",
              "criterio79",
              "criterio80",
              "criterio81",
              "criterio82",
              "criterio83",
              "criterio104",
            ],
            porcentajeId: "porcentajeccae",
          },
          {
            nombre: "Instrumentos de Medición",
            checkboxes: ["criterio84", "criterio85", "criterio86", "criterio87"],
            porcentajeId: "porcentajeInstrumentos",
          },
        ],
      },
      {
        id: "productoEnProceso",
        nombre: "PRODUCTO EN PROCESO",
        selectorAplica: "categoriaAplicaProducto",
        porcentajeGeneralId: "porcentajeProductoProceso",
        subareas: [
          {
            nombre: "Idoneidad e inocuidad del producto",
            checkboxes: [
              "criterio89",
              "criterio90",
              "criterio91",
              "criterio92",
              "criterio93",
              "criterio94",
              "criterio95",
              "criterio96",
              "criterio97",
              "criterio98",
            ],
            porcentajeId: "porcentajeIdoneidad",
          },
        ],
      },
    ],
  };

  const globalConfig = {
    porcentajeGlobalId: "globalArea", // ID de tu input global
  };
  // Función para calcular el porcentaje de una subárea o items-------------------
  function calcularPorcentajeSubarea(subarea) {
    const totalCheckboxes = subarea.checkboxes.length;
    if (totalCheckboxes === 0) return 100; // Evitar división por cero

    const valorPorCheckbox = 100 / totalCheckboxes;
    let marcados = 0;

    subarea.checkboxes.forEach((id) => {
      const checkbox = document.getElementById(id);
      if (checkbox && checkbox.checked) marcados++;
    });

    return 100 - marcados * valorPorCheckbox;
  }

  // Función para actualizar pórcentaje  categoria e items
  function actualizarCategoria(categoria) {
    let sumaPorcentajes = 0;
    let subareasValidas = 0;

    // Actualizar cada subárea
    categoria.subareas.forEach((subarea) => {
      const porcentajeInput = document.getElementById(subarea.porcentajeId);
      if (porcentajeInput) {
        const porcentaje = calcularPorcentajeSubarea(subarea);
        porcentajeInput.value = porcentaje.toFixed(1);
        aplicarEstiloPorcentaje(porcentajeInput);
        sumaPorcentajes += porcentaje;
        subareasValidas++;
      }
    });

    // Actualizar porcentaje general de la categoría
    const porcentajeGeneralInput = document.getElementById(categoria.porcentajeGeneralId);
    if (porcentajeGeneralInput) {
      const promedio = subareasValidas > 0 ? sumaPorcentajes / subareasValidas : 100;
      porcentajeGeneralInput.value = promedio.toFixed(1);
      aplicarEstiloPorcentaje(porcentajeGeneralInput);
    }
    calcularPorcentajeGlobal();
  }

  // Función para manejar el estado "Aplica/No aplica" en las categorias e items
  function manejarAplicaNoAplica(categoria) {
    const selector = document.getElementById(categoria.selectorAplica);
    if (!selector) return;

    const noAplica = selector.value === "no";

    // Habilitar/deshabilitar elementos
    categoria.subareas.forEach((subarea) => {
      subarea.checkboxes.forEach((id) => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.disabled = noAplica;
          if (noAplica) checkbox.checked = false;
        }
      });

      const porcentajeInput = document.getElementById(subarea.porcentajeId);
      if (porcentajeInput) {
        porcentajeInput.value = noAplica ? "N/A" : "100.00";
        aplicarEstiloPorcentaje(porcentajeInput);
      }
    });

    // Actualizar porcentaje general
    const generalInput = document.getElementById(categoria.porcentajeGeneralId);
    if (generalInput) {
      // Establecer valor según si aplica o no
      generalInput.value = noAplica ? "N/A" : 100.0;

      // Aplicar estilo correspondiente según el valor actual
      aplicarEstiloPorcentaje(generalInput);
    }
    calcularPorcentajeGlobal();
  }

  // aplica colores a los campos de porcentajes de las categorias-------------
  function aplicarEstiloPorcentaje(input) {
    const valor = input.value;

    if (valor === "N/A") {
      input.style.backgroundColor = "#838383";
      input.style.color = "#ffffff";
      input.style.fontWeight = "bold";
    } else {
      const num = parseFloat(valor);
      if (!isNaN(num)) {
        if (num < 100) {
          input.style.backgroundColor = "#d4edda";
          input.style.color = "#155724";
          input.style.fontWeight = "bold";
        } else {
          input.style.backgroundColor = "#d4edda";
          input.style.color = "#155724";
          input.style.fontWeight = "bold";
        }
      } else {
        // Valor no numérico inesperado
        input.style.backgroundColor = "";
        input.style.color = "";
        input.style.fontWeight = "";
      }
    }
  }

  // Inicialización de todas las categorías
  function inicializarCategorias() {
    config.categorias.forEach((categoria) => {
      // Configurar eventos de checkboxes
      categoria.subareas.forEach((subarea) => {
        subarea.checkboxes.forEach((id) => {
          const checkbox = document.getElementById(id);
          if (checkbox) {
            checkbox.addEventListener("change", () => actualizarCategoria(categoria));
            checkbox.checked = false; // Iniciar desmarcados
          }
        });
      });

      // Configurar selector "Aplica/No aplica"
      const selector = document.getElementById(categoria.selectorAplica);
      if (selector) {
        selector.addEventListener("change", () => {
          manejarAplicaNoAplica(categoria);
          if (selector.value === "si") {
            actualizarCategoria(categoria);
          }
        });
      }

      // Inicializar porcentajes
      actualizarCategoria(categoria);
    });
    calcularPorcentajeGlobal();
  }

  // Iniciar el sistema
  inicializarCategorias();

  function calcularPorcentajeGlobal() {
    let totalCheckboxes = 0;
    let checkboxesMarcados = 0;

    config.categorias.forEach((categoria) => {
      const selector = document.getElementById(categoria.selectorAplica);
      const noAplica = selector && selector.value === "no";

      if (!noAplica) {
        categoria.subareas.forEach((subarea) => {
          subarea.checkboxes.forEach((id) => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
              totalCheckboxes++;
              if (checkbox.checked) checkboxesMarcados++;
            }
          });
        });
      }
    });

    const porcentajeGlobal =
      totalCheckboxes > 0 ? 100 - (checkboxesMarcados / totalCheckboxes) * 100 : 100;

    const globalInput = document.getElementById(globalConfig.porcentajeGlobalId);
    if (globalInput) {
      globalInput.value = porcentajeGlobal.toFixed(1);
    }
  }
});
//--------------------------------------------------------------------------//-------------------------------------------------------

function calcularPromedioTemperatura() {
  let suma = 0;
  let cantidad = 0;

  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VHM" + i);
    if (input) {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        suma += valor;
        cantidad++;
      }
    }
  }

  const promedio = cantidad > 0 ? (suma / cantidad).toFixed(1) : "";
  const inputPromedio = document.getElementById("VHTemperaturaC");
  inputPromedio.value = promedio;

  // Cambiar color según el valor del promedio
  if (promedio !== "") {
    if (parseFloat(promedio) > 3.8) {
      inputPromedio.style.backgroundColor = "#ff3232"; // rojo claro
      inputPromedio.style.color = "black";
      inputPromedio.style.fontSize = "20px";
    } else {
      inputPromedio.style.backgroundColor = "#49de09"; // verde claro
      inputPromedio.style.color = "black";
      inputPromedio.style.fontSize = "20px";
    }
  } else {
    inputPromedio.style.backgroundColor = ""; // sin color
    inputPromedio.style.color = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VHM" + i);
    if (input) {
      input.addEventListener("input", calcularPromedioTemperatura);
    }
  }
});

function calcularPromedioTemperatura2() {
  let suma = 0;
  let cantidad = 0;

  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VMM" + i);
    if (input) {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        suma += valor;
        cantidad++;
      }
    }
  }

  const promedio = cantidad > 0 ? (suma / cantidad).toFixed(1) : "";
  const inputPromedio2 = document.getElementById("VMTemperaturaC");
  inputPromedio2.value = promedio;

  // Cambiar color según el valor del promedio
  if (promedio !== "") {
    if (parseFloat(promedio) > 3.8) {
      inputPromedio2.style.backgroundColor = "#ff3232"; // rojo claro
      inputPromedio2.style.color = "black";
      inputPromedio2.style.fontSize = "20px";
    } else {
      inputPromedio2.style.backgroundColor = "#49de09"; // verde claro
      inputPromedio2.style.color = "black";
      inputPromedio2.style.fontSize = "20px";
    }
  } else {
    inputPromedio2.style.backgroundColor = ""; // sin color
    inputPromedio2.style.color = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VMM" + i);
    if (input) {
      input.addEventListener("input", calcularPromedioTemperatura2);
    }
  }
});
function calcularPromedioTemperatura3() {
  let suma = 0;
  let cantidad = 0;

  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VPM" + i);
    if (input) {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        suma += valor;
        cantidad++;
      }
    }
  }

  const promedio = cantidad > 0 ? (suma / cantidad).toFixed(1) : "";
  const inputPromedio3 = document.getElementById("VPTemperaturaC");
  inputPromedio3.value = promedio;

  // Cambiar color según el valor del promedio
  if (promedio !== "") {
    if (parseFloat(promedio) > 3.8) {
      inputPromedio3.style.backgroundColor = "#ff3232"; // rojo claro
      inputPromedio3.style.color = "black";
      inputPromedio3.style.fontSize = "20px";
    } else {
      inputPromedio3.style.backgroundColor = "#49de09"; // verde claro
      inputPromedio3.style.color = "black";
      inputPromedio3.style.fontSize = "20px";
    }
  } else {
    inputPromedio3.style.backgroundColor = ""; // sin color
    inputPromedio3.style.color = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VPM" + i);
    if (input) {
      input.addEventListener("input", calcularPromedioTemperatura3);
    }
  }
});

function calcularPromedioTemperatura4() {
  let suma = 0;
  let cantidad = 0;

  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VCM" + i);
    if (input) {
      const valor = parseFloat(input.value);
      if (!isNaN(valor)) {
        suma += valor;
        cantidad++;
      }
    }
  }

  const promedio = cantidad > 0 ? (suma / cantidad).toFixed(1) : "";
  const inputPromedio4 = document.getElementById("VCTemperaturaC");
  inputPromedio4.value = promedio;

  // Cambiar color según el valor del promedio
  if (promedio !== "") {
    if (parseFloat(promedio) > 3.8) {
      inputPromedio4.style.backgroundColor = "#ff3232"; // rojo claro
      inputPromedio4.style.color = "black";
      inputPromedio4.style.fontSize = "20px";
    } else {
      inputPromedio4.style.backgroundColor = "#49de09"; // verde claro
      inputPromedio4.style.color = "black";
      inputPromedio4.style.fontSize = "20px";
    }
  } else {
    inputPromedio4.style.backgroundColor = ""; // sin color
    inputPromedio4.style.color = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 1; i <= 17; i++) {
    const input = document.getElementById("VCM" + i);
    if (input) {
      input.addEventListener("input", calcularPromedioTemperatura4);
    }
  }
});
//------------------------------------------------------------------------------//------------------------------------------------------------------------
// funcion para agregar colores a los select en el formato de verificacion de lockers
// Crear estilos dinámicamente
const estilo = document.createElement("style");
estilo.innerHTML = `
    .select-verde {
      background-color:rgb(135, 222, 155) !important;
      border-color: #28a745 !important;
      color: #155724 !important;
    }
    .select-rojo {
      background-color:rgb(229, 131, 139) !important;
      border-color: #dc3545 !important;
      color: #721c24 !important;
    }
  `;
document.head.appendChild(estilo);

// Función para aplicar color según el valor seleccionado
function aplicarColorSelect(select) {
  const valor = select.value;

  // Limpiar clases anteriores
  select.classList.remove("select-verde", "select-rojo");

  if (valor === "Cumple") {
    select.classList.add("select-verde");
  } else if (valor === "NoCumple") {
    select.classList.add("select-rojo");
  }
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select.form-select");

  selects.forEach((select) => {
    aplicarColorSelect(select); // Aplicar color al cargar si ya tiene valor

    select.addEventListener("change", function () {
      aplicarColorSelect(this);
    });
  });
});
//------------------------------------------------------------------------------------------//---------------------------------------
//---inhabilitacion de campos para el formato for-s-cci-26------
document.addEventListener("DOMContentLoaded", function () {
  const selectLugar = document.getElementById("controlLugar");
  const camposInhabilitar = [
    "productoControlCuartos",
    "ControlFechaVencimiento",
    "controlTempProducto",
    "loteControlTemperatura",
    "productoControlCuartos2",
    "ControlFechaVencimiento2",
    "controlTempProducto2",
    "loteControlTemperatura2",
    "productoExpControl",
  ]; // Cambia estos IDs según tus campos
  const valoresPrevios = {}; // Guardará los valores originales

  selectLugar.addEventListener("change", function () {
    const esContainer = this.value === "CONTAINER";

    camposInhabilitar.forEach((id) => {
      const campo = document.getElementById(id);
      if (campo) {
        if (esContainer) {
          // Guarda el valor anterior si aún no lo hemos guardado
          if (!valoresPrevios[id]) {
            valoresPrevios[id] = campo.value;
          }
          campo.value = "N/A";
          campo.disabled = true;

          // Estilo más oscuro
          campo.style.backgroundColor = "#d6d6d6";
          campo.style.color = "#666";
          campo.style.borderColor = "#aaa";
          campo.style.cursor = "not-allowed";
          campo.style.opacity = "1";
        } else {
          // Restaurar el valor anterior si existe
          campo.value = valoresPrevios[id] || "";
          campo.disabled = false;

          // Limpiar estilo
          campo.style.backgroundColor = "";
          campo.style.color = "";
          campo.style.borderColor = "";
          campo.style.cursor = "";
          campo.style.opacity = "";

          // Borrar valor guardado
          delete valoresPrevios[id];
        }
      }
    });
  });
});

//--------------------------------------------------------------------------//----------------------------------------
$(function () {
  var $contenedor = $("#contenedorCampos");
  var $orig = $contenedor.find(".grupoCampos").first();
  if (!$orig.length) return;

  var contador = $contenedor.find(".grupoCampos").length || 1;
  var maxDuplicados = 10;

  // Guardar plantilla limpia sin restos de select2
  var $template = $orig.clone(false).find(".select2-container, .select2").remove().end();
  $template.find("select").each(function () {
    $(this).replaceWith(
      $(this)
        .clone()
        .removeClass(function (i, c) {
          return (c.match(/(^|\s)select2\S+/g) || []).join(" ");
        }),
    );
  });

  // Agregar duplicado
  $("#btnAgregar").on("click", function (e) {
    e.preventDefault();
    if ($contenedor.find(".grupoCampos").length >= maxDuplicados) {
      return alert("Máximo permitido: " + maxDuplicados);
    }

    contador++;
    var $clone = $template.clone(false);

    // Actualizar atributos y limpiar valores
    $clone.find("input, select, textarea").each(function () {
      var $el = $(this);
      var name = $el.attr("name");
      if (name) $el.attr("name", name.replace(/\[\d+\]/, "[" + contador + "]"));

      var id = $el.attr("id");
      if (id) $el.attr("id", id.replace(/\_\d+$/, "") + "_" + contador);

      if ($el.is("select")) {
        $el.prop("selectedIndex", 0).prop("disabled", false);
      } else if ($el.is(":checkbox, :radio")) {
        $el.prop("checked", false);
      } else if ($el.attr("type") !== "hidden") {
        $el.val("");
      }
    });

    // Actualizar labels
    $clone.find("label[for]").each(function () {
      var forAttr = $(this).attr("for");
      if (forAttr) $(this).attr("for", forAttr.replace(/\_\d+$/, "") + "_" + contador);
    });

    // Botón borrar
    if (!$clone.find(".btnRemove").length) {
      $clone.append(
        '<button type="button" class="btnRemove btn btn-danger btn-sm mt-2">Borrar Producto</button>',
      );
    }

    $contenedor.append("<hr>").append($clone);

    // Iniciar select2
    if ($.fn.select2) {
      $clone.find("select").select2({
        dropdownParent: $("#modal1 .modal-body").length
          ? $("#modal1 .modal-body")
          : $(document.body),
        width: "90%",
      });
    }
  });

  // Borrar duplicado
  $contenedor.on("click", ".btnRemove", function () {
    $(this).closest(".grupoCampos").prev("hr").remove();
    $(this).closest(".grupoCampos").remove();
  });
});
//---------------------------------------------------------------------//-------------------------------------

$(function () {
  var $contenedor = $("#contenedorCamposs");
  var $orig = $contenedor.find(".grupoCamposs").first();
  if (!$orig.length) return;

  var contador = $contenedor.find(".grupoCamposs").length || 1;
  var maxDuplicados = 10;

  // Guardar plantilla limpia sin restos de select2
  var $template = $orig.clone(false).find(".select2-container, .select2").remove().end();
  $template.find("select").each(function () {
    $(this).replaceWith(
      $(this)
        .clone()
        .removeClass(function (i, c) {
          return (c.match(/(^|\s)select2\S+/g) || []).join(" ");
        }),
    );
  });

  // Agregar duplicado
  $("#btnAgregarr").on("click", function (e) {
    e.preventDefault();
    if ($contenedor.find(".grupoCamposs").length >= maxDuplicados) {
      return alert("Máximo permitido: " + maxDuplicados);
    }

    contador++;
    var $clone = $template.clone(false);

    // Actualizar atributos y limpiar valores
    $clone.find("input, select, textarea").each(function () {
      var $el = $(this);
      var name = $el.attr("name");
      if (name) $el.attr("name", name.replace(/\[\d+\]/, "[" + contador + "]"));

      var id = $el.attr("id");
      if (id) $el.attr("id", id.replace(/\_\d+$/, "") + "_" + contador);

      if ($el.is("select")) {
        $el.prop("selectedIndex", 0).prop("disabled", false);
      } else if ($el.is(":checkbox, :radio")) {
        $el.prop("checked", false);
      } else if ($el.attr("type") !== "hidden") {
        $el.val("");
      }
    });

    // Actualizar labels
    $clone.find("label[for]").each(function () {
      var forAttr = $(this).attr("for");
      if (forAttr) $(this).attr("for", forAttr.replace(/\_\d+$/, "") + "_" + contador);
    });

    // Botón borrar
    if (!$clone.find(".btnRemove").length) {
      $clone.append(
        '<button type="button" class="btnRemove btn btn-danger btn-sm mt-2">Borrar Producto</button>',
      );
    }

    $contenedor.append('<hr style="border:1px solid blue">').append($clone);

    // Iniciar select2
    if ($.fn.select2) {
      $clone.find("select").select2({
        dropdownParent: $("#modal1 .modal-body").length
          ? $("#modal1 .modal-body")
          : $(document.body),
        width: "90%",
      });
    }
  });

  // Borrar duplicado
  $contenedor.on("click", ".btnRemove", function () {
    $(this).closest(".grupoCamposs").prev("hr").remove();
    $(this).closest(".grupoCamposs").remove();
  });
});


//--- Funcion Desinfectantes ------------------------------------------------------------------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  const concentracionesPorDesinfectante = {
    "Acido Peracetico": "160",
	"Amonio Cuaternario": "200",
    "Hipoclorito Sodio": "200"
  };

  // Configuración de los pares de elementos
  const configuraciones = [
    { selectId: "dDesinfeccionG", inputId: "concentracionDesinfeccionG" },
    { selectId: "dVerificacionC", inputId: "concentracionVerificacionC" }
  ];

  configuraciones.forEach(config => {
    const desinfectanteSelect = document.getElementById(config.selectId);
    const concentracionInput = document.getElementById(config.inputId);

    if (!desinfectanteSelect || !concentracionInput) {
      console.error(`No se encontraron los elementos: ${config.selectId} o ${config.inputId}`);
      return;
    }

    function actualizarConcentracion() {
      const desinfectanteSeleccionado = desinfectanteSelect.value;
      
      if (desinfectanteSeleccionado && concentracionesPorDesinfectante[desinfectanteSeleccionado]) {
        concentracionInput.value = `${concentracionesPorDesinfectante[desinfectanteSeleccionado]} ppm`;
      } else {
        concentracionInput.value = "";
        concentracionInput.placeholder = "Seleccione un desinfectante";
      }
    }

    desinfectanteSelect.addEventListener("change", actualizarConcentracion);
    actualizarConcentracion(); // Inicializar
  });
});


/* FUNION PARA TARER CEDULA Y NOMBRE DEL FOR-S-CCI-100 DESINFECCION DE GUANTES */
$(document).ready(function () {

  // 📌 Función para buscar empleado por cédula
  function buscarEmpleado(inputId) {
    let cedula = $(inputId).val().trim();

    // ❌ Si el usuario escribe letras → NO buscar
    if (!/^[0-9]+$/.test(cedula)) {
      $(inputId).val("DATO INVÁLIDO");
      return;
    }

    $.ajax({
      url: '../models/buscar_empleado.php',
      type: 'POST',
      data: { cedula: cedula },
      dataType: 'json',

      success: function (response) {
        if (response.error) {
          $(inputId).val("NO ENCONTRADO");
        } else if (response.mostrar) {
          $(inputId).val(response.mostrar); // Nombre del empleado
        } else {
          $(inputId).val("SIN DATOS");
        }
      },

      error: function () {
        $(inputId).val("ERROR SERVIDOR");
      }
    });
  }

  // ✔ EVENTOS QUE SÍ FUNCIONAN
  $('#nombreProceso14').on('change', function () {
    buscarEmpleado('#nombreProceso14');
  });

  $('#nombreProceso15').on('change', function () {
    buscarEmpleado('#nombreProceso15');
  });

  $('#nombreProceso16').on('change', function () {
    buscarEmpleado('#nombreProceso16');
  });

});


/* FUNION PARA TARER CEDULA Y NOMBRE DEL FORMATO ROTURA Y CONDICION */
$(document).ready(function () {

  // 📌 Función para buscar empleado por cédula
  function buscarEmpleado(inputId) {
    let cedula = $(inputId).val().trim();

    // ❌ Si el usuario escribe letras → NO buscar
    if (!/^[0-9]+$/.test(cedula)) {
      $(inputId).val("DATO INVÁLIDO");
      return;
    }

    $.ajax({
      url: '../models/buscar_empleado.php',
      type: 'POST',
      data: { cedula: cedula },
      dataType: 'json',

      success: function (response) {
        if (response.error) {
          $(inputId).val("NO ENCONTRADO");
        } else if (response.mostrar) {
          $(inputId).val(response.mostrar); // Nombre del empleado
        } else {
          $(inputId).val("SIN DATOS");
        }
      },

      error: function () {
        $(inputId).val("ERROR SERVIDOR");
      }
    });
  }

  // ✔ EVENTOS QUE SÍ FUNCIONAN
  $('#nombreProceso11').on('change', function () {
    buscarEmpleado('#nombreProceso11');
  });

  $('#nombreProceso12').on('change', function () {
    buscarEmpleado('#nombreProceso12');
  });

  $('#nombreProceso13').on('change', function () {
    buscarEmpleado('#nombreProceso13');
  });

});
//------------------------------------------------------------------------------------------------------------------

/* funcion de ControlCONTRAMUESTRA */
// 🔹 Cargar contramuestra por ID
// 🔹 Cargar datos de contramuestra por ID
function cargarContramuestraPorID(id) {
  if (!id || id.trim() === "") {
    Swal.fire("Atención", "Debes ingresar un ID válido", "warning");
    return;
  }

  $.ajax({
    url: "../models/controlTablas.php",
    type: "POST",
    dataType: "json",
    data: { opcion: 66, id: id },
    success: function(data) {
      if (data && data.id) {
        // Llenar campos iniciales (readonly, para que se vean y se envíen)
        $("#horacontraMuestra").val(data.hora);
        $("#productocontraMuestra").val(data.producto);
        $("#lotecontraMuestra").val(data.lote);
        $("#produccioncontraMuestra").val(data.fecha_produ);
        $("#vencimientocontraMuestra").val(data.fecha_venci);
        $("#pesocontraMuestra").val(data.peso_inicial);

        // Llenar campos de contramuestra para completar
        $("#colorcontraMuestra").val(data.color);
        $("#olorcontraMuestra").val(data.olor);
        $("#empaquecontraMuestra").val(data.empaque);
        $("#aparienciacontraMuestra").val(data.apariencia);
        $("#temperacontraMuestra").val(data.temperatura);
        $("#diascontraMuestra").val(data.dias_almace);
        $("#finalcontraMuestra").val(data.peso_final);
        $("#accionescontraMuestra").val(data.acciones_correcti);
        $("#verificadocontraMuestra").val(data.veri_por);
        $("#aprobocontraMuestra").val(data.aprobado);

        // 🔒 Bloquear solo campos iniciales para que no se editen
        $("#horacontraMuestra, #productocontraMuestra, #lotecontraMuestra, #produccioncontraMuestra, #vencimientocontraMuestra, #pesocontraMuestra")
          .prop("readonly", true)
          .prop("required", false);

        // 🔓 Desbloquear campos de contramuestra para completar
        $("#colorcontraMuestra, #olorcontraMuestra, #empaquecontraMuestra, #aparienciacontraMuestra, #temperacontraMuestra, #diascontraMuestra, #finalcontraMuestra, #accionescontraMuestra, #verificadocontraMuestra, #aprobocontraMuestra")
          .prop("disabled", false)
          .prop("required", true);

        Swal.fire("Listo", "Datos cargados correctamente, puedes completar los campos restantes", "success");
      } else {
        Swal.fire("Atención", "No se encontró un registro con ese ID", "warning");
      }
    },
    error: function(xhr) {
      console.error("Error AJAX:", xhr.responseText);
      Swal.fire("Error", "No se pudo cargar la información", "error");
    }
  });
}





/* ---------------------------------------- cuarto funcion limpieza */
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("firmaVerificacionCuartosres"); // 🎯 tu canvas
  const ctx = canvas.getContext("2d");
  const clearBtn = document.getElementById("clearBtnVerificacionCuartos"); // 🎯 tu botón borrar
  const base64Input = document.getElementById("base64VerificacionCuartos"); // 🎯 tu input hidden
  const enviarBtn = document.getElementById("controlEnviar"); // Botón de envío del formulario

  let drawing = false;
  let lastPos = { x: 0, y: 0 };

  // Estilos del pincel
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  // Obtener posición del mouse
  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  // Obtener posición táctil
  function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }

  // Empezar a dibujar
  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    lastPos = getMousePos(e);
  });

  canvas.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      drawing = true;
      lastPos = getTouchPos(e);
    },
    { passive: false },
  );

  // Dejar de dibujar
  canvas.addEventListener("mouseup", () => {
    drawing = false;
  });

  canvas.addEventListener(
    "touchend",
    (e) => {
      e.preventDefault();
      drawing = false;
    },
    { passive: false },
  );

  // Dibujar mientras se mueve
  canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
      const mousePos = getMousePos(e);
      drawLine(lastPos, mousePos);
      lastPos = mousePos;
    }
  });

  canvas.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      if (drawing) {
        const touchPos = getTouchPos(e);
        drawLine(lastPos, touchPos);
        lastPos = touchPos;
      }
    },
    { passive: false },
  );

  // Función para dibujar línea
  function drawLine(from, to) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  // Limpiar firma
  clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    base64Input.value = "";
  });

  // Guardar firma cuando se hace clic en el botón de envío
  enviarBtn?.addEventListener("click", () => {
    /* if (isCanvasBlank(canvas)) {
       alert("Por favor, firme en el campo de firma.");
       return;
     }
 */
    const base64Image = canvas.toDataURL();
    base64Input.value = base64Image;
    // console.log("📌 Firma guardada:", base64Image);
  });

  // Validar si el canvas está vacío
  function isCanvasBlank(c) {
    const blank = document.createElement("canvas");
    blank.width = c.width;
    blank.height = c.height;
    return c.toDataURL() === blank.toDataURL();
  }
});


/* ---firma veririfucacionlimpñieza cuartos  */

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("firmaVerificacionCuartveri"); // 🎯 tu canvas
  const ctx = canvas.getContext("2d");
  const clearBtn = document.getElementById("clearBtnVerificacionveri"); // 🎯 tu botón borrar
  const base64Input = document.getElementById("base64VerificacionCuartosveri"); // 🎯 tu input hidden
  const enviarBtn = document.getElementById("controlEnviar"); // Botón de envío del formulario

  let drawing = false;
  let lastPos = { x: 0, y: 0 };

  // Estilos del pincel
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.strokeStyle = "black";

  // Obtener posición del mouse
  function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  // Obtener posición táctil
  function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  }

  // Empezar a dibujar
  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    lastPos = getMousePos(e);
  });

  canvas.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      drawing = true;
      lastPos = getTouchPos(e);
    },
    { passive: false },
  );

  // Dejar de dibujar
  canvas.addEventListener("mouseup", () => {
    drawing = false;
  });

  canvas.addEventListener(
    "touchend",
    (e) => {
      e.preventDefault();
      drawing = false;
    },
    { passive: false },
  );

  // Dibujar mientras se mueve
  canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
      const mousePos = getMousePos(e);
      drawLine(lastPos, mousePos);
      lastPos = mousePos;
    }
  });

  canvas.addEventListener(
    "touchmove",
    (e) => {
      e.preventDefault();
      if (drawing) {
        const touchPos = getTouchPos(e);
        drawLine(lastPos, touchPos);
        lastPos = touchPos;
      }
    },
    { passive: false },
  );

  // Función para dibujar línea
  function drawLine(from, to) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

  // Limpiar firma
  clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    base64Input.value = "";
  });

  // Guardar firma cuando se hace clic en el botón de envío
  enviarBtn?.addEventListener("click", () => {
    /* if (isCanvasBlank(canvas)) {
       alert("Por favor, firme en el campo de firma.");
       return;
     }
 */
    const base64Image = canvas.toDataURL();
    base64Input.value = base64Image;
    // console.log("📌 Firma guardada:", base64Image);
  });

  // Validar si el canvas está vacío
  function isCanvasBlank(c) {
    const blank = document.createElement("canvas");
    blank.width = c.width;
    blank.height = c.height;
    return c.toDataURL() === blank.toDataURL();
  }
});



/* ROTURA Y CONDICION --------------------------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const areasPorPlantaroturacondicion = {
    "Derivados Carnicos Pereira": [
      "ALISTAMIENTO, MEZCLADO Y MOLIENDA MPC",
      "ALMACENAMIENTO DE EMPAQUES",
      "CUARTOS DE ALMACENAMIENTO DE PT",
      "COCCION",
      "CUARTO DE PRODUCTO EN PROCESO",
      "CUARTO MPC 1, 2 Y 3",
      "EMBUTIDO",
      "ESCALAS Y FILTROS SANITARIOS",
      "LOCKERS Y VESTIERES",
      "PESAJE DE MPNC",
      "TERMOFORMADO - EMBALAJE",
      "TUNEL DE CHOQUE",
      "TUNEL Y ALMACENAMIENTO DE CANASTILLAS",
      "ZONA DE PICADO Y TAJADO",
    ],
    "Beneficio y Produccion Pereira": [
      "FILETEO Y MARINADO DE PAVOS",
      "DESPRESE Y MARINADO",
      "ENFRIAMIENTO DE VISCERAS",
      "PLANTA DE HIELO - SALMUERA",
      "POST PROCESO",
      "ALMACENAMIENTO",
      "ENFRIAMIENTO DE CANAL",
      "EVISCERACION",
      "PLATAFORMA",
      "FILETEO DE POLLO",
      "ALMACENAMIENTO",
      "DESPACHOS",
      "LAVADO DE CANASTILLAS",
      "CARNES MOLIDAS",
      "LOTEO",
    ],
  };

  const plantaSelect = document.getElementById("plantaroturacondi");
  const areasSelect = document.getElementById("areasroturacondi");

  plantaSelect.addEventListener("change", function () {
    const plantaSeleccionada = this.value;

    areasSelect.innerHTML = '<option value="" selected hidden>Selecciona Área</option>';

    if (areasPorPlantaroturacondicion[plantaSeleccionada]) {
      areasPorPlantaroturacondicion[plantaSeleccionada].forEach((area) => {
        const option = document.createElement("option");
        option.value = area;
        option.textContent = area;
        areasSelect.appendChild(option);
      });
    }
  });
});


//-----------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const opcionesPorTipo = {
    "Rotura": [
      "Fragmentación de metal",
      "Fragmentación de elementos electrónicos-herramientas",
      "Fragmentación de cerámica -piedras(paredes o pisos)",
      "Fragmentación de plástico duro y quebradizo-teflón",
      "Fragmentación de vidrio"
    ],
    "Afectacion al Producto": [
      "Fragmentación de metal",
      "Fragmentación de elementos electrónicos-herramientas",
      "Fragmentación de cerámica -piedras(paredes o pisos)",
      "Fragmentación de plástico duro y quebradizo-teflón",
      "Fragmentación de vidrio"
    ],
    "Condicion locativa": [
      "VIDRIO",
      "CERÁMICA - PIEDRAS",
      "PLÁSTICO DURO Y QUEBRADIZO - TEFLÓN",
      "METAL",
      "ELEMENTOS ELECTRÓNICOS - HERRAMIENTAS",
      "MADERA",
      "PLAGA",
      "PARÁSITOS",
      "CABELLO",
      "POLIPROPILENO - PAPEL",
      "ESPONJILLA",
      "FIBRAS",
      "CERDAS DE CEPILLOS",
      "PRECITOS",
      "INGREDIENTES NO HOMOGENIZADOS",
      "PLÁSTICO BLANDO - POLIETILENO",
      "ETIQUETAS",
      "PLUMAS",
      "PELOS",
      "HUESO",
      "VÍSCERA NO COMESTIBLE",
      "CARTÍLAGO",
      "UÑAS",
      "PICOS",
      "CUTÍCULA"
    ]
  };

  const tipoSelect = document.getElementById("tipoReporte");
  const detalleSelect = document.getElementById("detalleReporte");
  const contenedorPreguntas = document.getElementById("preguntasRotura");
  const areaLiberada = document.getElementById("areaLiberada");
  const contenedorAreaLiberada = document.getElementById("contenedorAreaLiberada");

  tipoSelect.addEventListener("change", function () {
    const tipoSeleccionado = tipoSelect.value;

    // Limpiar selects y preguntas
    detalleSelect.innerHTML = '<option value="" selected hidden>Selecciona</option>';
    contenedorPreguntas.innerHTML = "";

    const lista = opcionesPorTipo[tipoSeleccionado];
    if (Array.isArray(lista)) {
      lista.forEach((opcion) => {
        const opt = document.createElement("option");
        opt.value = opcion;
        opt.textContent = opcion;
        detalleSelect.appendChild(opt);
      });
    }

    // 👇 Mostrar u ocultar el bloque completo (label + select)
    if (tipoSeleccionado === "Condicion locativa") {
      contenedorAreaLiberada.style.display = "none";
    } else {
      contenedorAreaLiberada.style.display = "";
    }

    // 👇 Preguntas dinámicas
    if (tipoSeleccionado === "Rotura" || tipoSeleccionado === "Afectacion al Producto") {
      const preguntas = [
        "1.¿El evento se presento en las areas de proceso con producto expuesto?",
        "2.¿Se evidencia amenaza a la inocuidad del producto terminado?",
        "3.¿Se despejo e identifico el lugar exacto donde ocurrio la rotura de material quebradizo?",
        "4.¿Se realizo limpieza en seco de manera cuidadosa de la zona involucrada?",
        "5.¿Se verifico el calzado del personal presente en el area?",
        "6.¿Se dispusieron de manera adecuada los residuos generados durante el evento?",
        "7.¿El area se encuentra limpia y libre de peligros que afecten la inocuidad del producto terminado?",
        "8.¿Se genero retencion de producto semielaborado o terminado y se gestiono segun el procedimiento de Producto No Conforme?",
        "9.¿No se uso mangueras de agua ni se sopleteo con aire a presion el area comprometida?"
      ];

      preguntas.forEach((texto) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <label style="display:block; margin:3px 0;">
            <input type="checkbox" name="preguntasRotura[]" value="${texto}">
            ${texto}
          </label>`;
        contenedorPreguntas.appendChild(div);
      });
    } else if (tipoSeleccionado === "Condicion locativa") {
      const inputHidden = document.createElement("input");
      inputHidden.type = "hidden";
      inputHidden.name = "preguntasRotura[]";
      inputHidden.value = "No aplica";
      contenedorPreguntas.appendChild(inputHidden);
    }
  });
});
  


/* FUNION PARA TARER CEDULA Y NOMBRE DEL FORMATO ROTURA Y CONDICION */
$(document).ready(function() {

  // 🔍 Función para buscar empleado por cédula
  function buscarEmpleado(inputId) {
    let cedula = $(inputId).val().trim();

    if (cedula !== '') {
      $.ajax({
        url: '../models/buscar_empleado.php', // ✅ revisa si necesitas ../models/
        type: 'POST',
        data: { cedula: cedula },
        dataType: 'json',
        success: function(response) {
          if (response.error) {
            $(inputId).val('NO ENCONTRADO');
          } else if (response.mostrar) {
            // ✅ muestra la respuesta en el mismo input
            $(inputId).val(response.mostrar);
          } else {
            $(inputId).val('SIN DATOS');
          }
        },
        error: function() {
          $(inputId).val('ERROR SERVIDOR');
        }
      });
    }
  }

  // 👂 Detectar cuando el input pierde el foco (blur)
  $('#nombreProceso').on('blur', function() {
    buscarEmpleado('#nombreProceso');
  });

  $('#nombreCalidad').on('blur', function() {
    buscarEmpleado('#nombreCalidad');
  });

});

document.addEventListener("DOMContentLoaded", function() {
    const areaLiberada = document.getElementById("areaLiberada");

    const divExclusivoNo = document.getElementById("descripcionno");
    const inputExclusivoNo = document.getElementById("comentarioArea");

    const divIdsComunes = [
        "descripcionno3", "descripcionno4", "descripcionno5",
        "descripcionno6", "descripcionno7", "descripcionno8", "descripcionno9","small"
    ];
    
    const inputIdsComunes = [
        "comentarioArea3", "comentarioArea4", "comentarioArea5",
        "comentarioArea6", "comentarioArea7", "comentarioArea8", "comentarioArea10" 
    ];

    const comentarioDivsComunes = divIdsComunes.map(id => document.getElementById(id));
    const comentarioInputsComunes = inputIdsComunes.map(id => document.getElementById(id));


    areaLiberada.addEventListener("change", function() {
        const value = this.value;
        const isNo = value === "No";
        const isSi = value === "Si";

        if (divExclusivoNo) {
            divExclusivoNo.style.display = isNo ? "block" : "none";
        }
        if (!isNo && inputExclusivoNo) {
            inputExclusivoNo.value = "";
        }
        const shouldShowComunes = isNo || isSi; // Se muestran si es "No" O "Si"

        comentarioDivsComunes.forEach(div => {
            if (div) { 
                div.style.display = shouldShowComunes ? "block" : "none";
            }
        });

        if (!shouldShowComunes) {
            comentarioInputsComunes.forEach(input => {
                if (input) {
                    input.value = "";
                }
            });
        }
    });
});




/* funcion si o no condicion locativa  */
document.addEventListener("DOMContentLoaded", function() {

    const controlPrincipal = document.getElementById("areasiono");

    const divExclusivoNo = document.getElementById("descripcionno1"); 
    const inputExclusivoNo = document.getElementById("comentarioArea1"); 


    const divIdsComunes = [
        "descripcionno3", "descripcionno4", "descripcionno5",
        "descripcionno6", "descripcionno7", "descripcionno8", "descripcionno9","small"
    ];
    
    const inputIdsComunes = [
        "comentarioArea3", "comentarioArea4", "comentarioArea5",
        "comentarioArea6", "comentarioArea7", "comentarioArea8", "comentarioArea10"
    ];

    const divsComunes = divIdsComunes.map(id => document.getElementById(id));
    const inputsComunes = inputIdsComunes.map(id => document.getElementById(id));


    controlPrincipal.addEventListener("change", function() {
        const value = this.value;
        const isNo = value.trim() === "No";
        const isSi = value.trim() === "Si";
        if (divExclusivoNo) {
            divExclusivoNo.style.display = isNo ? "block" : "none";
        }
        if (!isNo && inputExclusivoNo) {
            inputExclusivoNo.value = "";
        }
        
        const shouldShowComunes = isNo || isSi; 

        divsComunes.forEach(div => {
            if (div) { 
                div.style.display = shouldShowComunes ? "block" : "none";
            }
        });
        if (!shouldShowComunes) {
            inputsComunes.forEach(input => {
                if (input) {
                    input.value = "";
                }
            });
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const tipoReporte = document.getElementById("tipoReporte");
    const areaLiberada = document.getElementById("contenedorAreaLiberada");
    const areaCorreccion = document.getElementById("contenedorAreacorreccion");

    tipoReporte.addEventListener("change", function() {
        // 👉 CORRECCIÓN CLAVE: Definir la variable tipoSeleccionado
        const tipoSeleccionado = this.value; 
        // 1. Lógica para Rotura y Afectación al Producto
        if (tipoSeleccionado === "Rotura" || tipoSeleccionado === "Afectacion al Producto") {
            // Muestra los campos de Rotura
            areaLiberada.style.display = "block";

            // Oculta los campos de Condición Locativa
            areaCorreccion.style.display = "none";  
        } 
        // 2. Lógica para Condición Locativa
        else if (tipoSeleccionado === "Condicion locativa") {
            
            // Oculta los campos de Rotura
            areaLiberada.style.display = "none";
            areaCorreccion.style.display = "block";
        } 
       
        else {
            areaLiberada.style.display = "none";
            areaCorreccion.style.display = "none";
        }
    });
});




/*--------------------FOR-S-CCI-20-INSPECCIÓN CALIDAD PRODUCTO TERMINADO---------------------------  */
// Porcentaje asignado a cada campo (suma 100%)
function actualizarPorcentajeAutomatico() {
    const totalMuestrasInput = document.getElementById("muestrasInspeccionCalidad");
    const porcentajeHidden = document.getElementById("porcentajeInspeccion"); // hidden
    const progresoInput = document.getElementById("progresoInspeccion"); // input type=number (disabled)

    if (!totalMuestrasInput || !porcentajeHidden || !progresoInput) return;

    const totalMuestras = parseFloat(totalMuestrasInput.value);
    if (isNaN(totalMuestras) || totalMuestras <= 0) {
        // Limpiar campos cuando no hay un total válido
        porcentajeHidden.value = "";
        progresoInput.value = "";
        return;
    }

    const camposFallas = [
        "dislocacionInspeccionCalidad",
        "residualInspeccionCalidad",
        "plumasInspeccionCalidad",
        "pigmentacionInspeccionCalidad",
        "cuticulaInspeccionCalidad",
        "hematomasInspeccionCalidad",
        "elementosInspeccionCalidad",
        "embalajeIncorrectocalidad",
        "trazabilidadInspeccionCalidad",
        "rupturasInspeccionCalidad",
        "lixiviadoInspeccionCalidad",
        "selladoInspeccionCalidad",
        "fueraInspeccionCalidad",
        "rotulacionCalidad"
    ];

    let totalFallas = 0;
    camposFallas.forEach(id => {
        const campo = document.getElementById(id);
        if (campo && campo.value !== "") {
            const v = parseFloat(campo.value);
            if (!isNaN(v)) totalFallas += v;
        }
    });

    // Cálculo porcentaje restante (0..100)
    let porcentajeRestante = 100 - ((totalFallas / totalMuestras) * 100);
    if (porcentajeRestante < 0) porcentajeRestante = 0;
    if (porcentajeRestante > 100) porcentajeRestante = 100;

    const porcentajeFinal = parseFloat(porcentajeRestante.toFixed(1)); // número

    // Asignar solo valores numéricos a inputs tipo number
    porcentajeHidden.value = porcentajeFinal;        // valor real (ej. 87.5) para enviar
    progresoInput.value = porcentajeFinal;          // muestra el número en el input
}

// Ejecutar cada vez que cambie cualquier campo
document.addEventListener("DOMContentLoaded", function() {
    const campos = [
        "dislocacionInspeccionCalidad",
        "residualInspeccionCalidad",
        "plumasInspeccionCalidad",
        "pigmentacionInspeccionCalidad",
        "cuticulaInspeccionCalidad",
        "hematomasInspeccionCalidad",
        "elementosInspeccionCalidad",
        "embalajeIncorrectocalidad",
        "trazabilidadInspeccionCalidad",
        "rupturasInspeccionCalidad",
        "lixiviadoInspeccionCalidad",
        "selladoInspeccionCalidad",
        "fueraInspeccionCalidad",
        "muestrasInspeccionCalidad",
        "rotulacionCalidad"
    ];

    campos.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener("input", actualizarPorcentajeAutomatico);
            input.addEventListener("change", actualizarPorcentajeAutomatico);
        }
    });
});


/* ------------------------FUNCION PARA HACER BLOQUEOS EN FOR-S-CCI-66-CONTROL CLORO RESIDUAL PUNTOS DE DESINFECCION------------------ */

document.addEventListener("DOMContentLoaded", function () {

    const modulos = {
        "EMPAQUE VISCERA": ["empaqueViscera1", "empaqueViscera2", "empaqueVisceraCuchillo", "empaqueVisceraPala"],
        "EMPAQUE CANAL": ["empaqueCanal1", "empaqueCanal2", "empaqueCanal3", "empaqueCanal4", "palaChiller"],
        "DESPRESE Y MARINADO": [
            "marinado1", "marinado2", "marinado3", "marinado4", "marinado5", "marinado6",
            "marinadoCuchillo1", "marinadoCuchillo2", "marinadoCuchillo3", "marinadoCuchillo4",
            "marinadoCuchillo5", "marinadoCuchillo6", "entradaTrolley", "salidaTrolley"
        ],
        "CARNES MOLIDAS": ["carnesMolidas"],
        "FILETEO POLLO": [
            "fileteoPollo", "fileteoPolloTablas",
            "fileteoPolloCuchillo1", "fileteoPolloCuchillo2",
            "fileteoPolloCuchillo3", "fileteoPolloCuchillo4"
        ],
        "FILETEO PAVOS": [
            "fileteoPavos", "fileteoPavos2",
            "fileteoPavosCuchillo1", "fileteoPavosCuchillo2",
            "fileteoPavosCuchillo3", "fileteoPavosCuchillo4",
            "fileteoPavosCuchillo5", "fileteoPavosCuchillo6",
            "fileteoPavosCuchillo7", "fileteoPavosCuchillo8",
            "fileteoPavosCuchillo9", "fileteoPavosCuchillo10",
            "fileteoPavosCuchillo11", "fileteoPavosCuchillo12",
            "fileteoPavosCuchillo13", "fileteoPavosCuchillo14"
        ],
        "DESPACHOS": ["despachos", "iqf", "iqf2", "cambioEmpaque", "reseleccion"],
        "POST PROCESO": [
            "pediluvioPosproceso1", "pediluvioPosproceso2",
            "posproceso1", "posproceso2", "posprocesoCuchillo"
        ]
    };

    const generales = ["zonaBlanca", "basculaProduccion", "pediluvioHielo", "palaHielo"];
    const selectcloroPuntos = document.getElementById("selectcloroPuntos");
    const todosLosIds = Object.values(modulos).flat();

    // 1. FUNCIÓN DE COLOR: Define estrictamente los colores deseados. (CORREGIDA)
    function aplicarColorSegunValor(selectElement) {
        var valorSeleccionado = selectElement.value;

        // Limpiar estilos no relacionados con el color
        selectElement.style.color = "black";
        selectElement.style.border = "";
        selectElement.style.opacity = "";
        selectElement.style.cursor = "";
        
        // 🚨 Color base/por defecto: BLANCO. 
        selectElement.style.backgroundColor = "white"; 

        // Aplicar el color según la opción seleccionada
        if (valorSeleccionado === "CUMPLE") {
            selectElement.style.backgroundColor = "lightgreen";
        } else if (valorSeleccionado === "NO CUMPLE") {
            selectElement.style.backgroundColor = "lightcoral";
        } else if (valorSeleccionado === "NO CUMPLE POR LIMPIEZA") {
            selectElement.style.backgroundColor = "lightblue";
        } else if (valorSeleccionado === "N/A") {
            // N/A es el único que debe ser gris.
            selectElement.style.backgroundColor = "gray"; 
        }
        // Si valorSeleccionado es "", se queda con el fondo blanco.
    }
    
    // 2. FUNCIÓN DE ESTILO DE DESHABILITADO: (Se mantiene, aunque ya no deshabilitemos campos de módulo)
    function aplicarEstilosDeshabilitado(el) {
        el.style.border = "gray";
        el.style.opacity = ""; 
        el.style.cursor = "";
        el.style.color = "black"; 
    }

    // 3. FUNCIÓN PARA ASEGURAR OPCIÓN "N/A"
    function asegurarNA(select) {
        if (!select) return;
        const existe = Array.from(select.options).some(opt => opt.value === "N/A");
        if (!existe) {
            const opt = document.createElement("option");
            opt.value = "N/A";
            opt.textContent = "N/A";
            select.appendChild(opt);
        }
    }

    // 4. FUNCIÓN PRINCIPAL DE HABILITACIÓN/BLOQUEO (Maneja UN solo módulo)
    function habilitarModulo(nombreModulo) {
        const idsModuloActual = modulos[nombreModulo] || [];
        const idsHabilitados = new Set([...idsModuloActual, ...generales]);

        [...todosLosIds, ...generales].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;

            asegurarNA(el);
            
            if (idsHabilitados.has(id)) {
                // HABILITACIÓN (Se puede editar y queda en blanco si está vacío)
                el.disabled = false;
                // Si el campo tiene N/A (de la inicialización o un cambio anterior), lo ponemos en vacío para que se vea BLANCO.
                if (el.value === "N/A" || el.value === "") el.value = ""; 
                aplicarColorSegunValor(el); 

                if (!el.dataset.listenerAdded) {
                    el.addEventListener('change', () => aplicarColorSegunValor(el));
                    el.dataset.listenerAdded = 'true';
                }

            } else {
                // MÓDULO NO SELECCIONADO (Mantiene valores y se asegura N/A si está vacío)
                el.disabled = false; 

                // Si no se ha llenado (está vacío), lo forzamos a N/A para que se pinte GRIS.
                if (el.value === "") { 
                    el.value = "N/A"; 
                }
                
                aplicarColorSegunValor(el); 
                aplicarEstilosDeshabilitado(el); 
            }
        });
    }

    // 5. INICIALIZACIÓN
    
    // Inicializa todos los campos de módulo como N/A para que se vean GRISES
    todosLosIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            asegurarNA(el);
            el.value = "N/A"; 
            el.disabled = false;
            aplicarColorSegunValor(el);
            aplicarEstilosDeshabilitado(el);
        }
    });

    // Asegura que los campos generales estén habilitados e inician en BLANCO
    generales.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            asegurarNA(el);
            el.disabled = false;
            el.value = ""; // Inicia vacío, lo que lo pinta BLANCO.
            aplicarColorSegunValor(el);
            el.addEventListener('change', () => aplicarColorSegunValor(el));
            el.dataset.listenerAdded = 'true';
        }
    });

    // Evento principal para cambiar de módulo (Manejo de UN solo módulo)
    selectcloroPuntos.addEventListener("change", function () {
        const modulo = this.value;
        if (modulo && modulos[modulo]) {
            habilitarModulo(modulo);
        } else {
            habilitarModulo(null); 
        }
    });
});

/* -------------------------- IMAGEN FOR_S_CCI_95 ROTURA Y CONDICION--------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    // 🎯 Capturamos los nuevos elementos
    const fileInput = document.getElementById("imagenLocativa");
    const previewDiv = document.getElementById("previewLocativa");
    const clearBtn = document.getElementById("clearBtncondicionLocativa");
    const base64Input = document.getElementById("base64condicionLocativa");
    // El botón de envío del formulario (controlEnviar) se mantiene si lo usas para lanzar la subida

    // 1. Manejar la selección y previsualización de la imagen
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // A) Mostrar previsualización
                previewDiv.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
                
                // B) Guardar la Base64 completa en el input hidden para enviarla al backend
                base64Input.value = e.target.result;
            };

            // Leer el archivo como una URL de datos (Base64)
            reader.readAsDataURL(file);
        } else {
            // Si no hay archivo, limpiar
            previewDiv.innerHTML = `<span id="previewText" style="color:#6c757d;">Previsualización de Imagen</span>`;
            base64Input.value = "";
        }
    });

    // 2. Limpiar el campo de imagen
    clearBtn.addEventListener("click", () => {
        fileInput.value = ""; // Limpiar el input file
        previewDiv.innerHTML = `<span id="previewText" style="color:#6c757d;">Previsualización de Imagen</span>`;
        base64Input.value = ""; // Limpiar el hidden input
    });
});
/* imagen 2 */
document.addEventListener("DOMContentLoaded", () => {
    // 🎯 Capturamos los nuevos elementos
    const fileInput = document.getElementById("imagenLocativa1");
    const previewDiv = document.getElementById("previewLocativa1");
    const clearBtn = document.getElementById("clearBtncondicionLocativa1");
    const base64Input = document.getElementById("base64condicionLocativa1");
    // El botón de envío del formulario (controlEnviar) se mantiene si lo usas para lanzar la subida

    // 1. Manejar la selección y previsualización de la imagen
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                // A) Mostrar previsualización
                previewDiv.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
                
                // B) Guardar la Base64 completa en el input hidden para enviarla al backend
                base64Input.value = e.target.result;
            };

            // Leer el archivo como una URL de datos (Base64)
            reader.readAsDataURL(file);
        } else {
            // Si no hay archivo, limpiar
            previewDiv.innerHTML = `<span id="previewText1" style="color:#6c757d;">Previsualización de Imagen 2</span>`;
            base64Input.value = "";
        }
    });

    // 2. Limpiar el campo de imagen
    clearBtn.addEventListener("click", () => {
        fileInput.value = ""; // Limpiar el input file
        previewDiv.innerHTML = `<span id="previewText1" style="color:#6c757d;">Previsualización de Imagen 2 </span>`;
        base64Input.value = ""; // Limpiar el hidden input
    });
});

function cargarRoturaCondicion(id) {
    if (!id || id.trim() === "") {
        swal("Atención", "Debes ingresar un ID válido", "warning");
        return;
    }

    // Definición de contenedores de imagen
    const contenedorImagen1 = $("#contenedorImagenLocativa");
    const contenedorImagen2 = $("#contenedorImagenLocativa1");
    
    $.ajax({
        url: "../models/controlTablas.php",
        type: "POST",
        dataType: "json",
        data: { opcion: 71, id: id },
        
        success: function(data) {
            
            if (data && data.id) {
                
                // Carga de campos
                $("#tipoReporte").val(data.tipo_reporte);
                $("#comentarioArea").val(data.descripcion_extra);
                $("#comentarioArea1").val(data.descripcion_extra1);
                $("#areasiono").val(data.area_siono);
                $("#areaLiberada").val(data.areaLiberada);

               
                // ====== CAMPOS COMPARTIDOS ======
                const divComentario = document.getElementById("descripcionno2");
                const inputComentario = document.getElementById("comentarioArea2");


                // ====== AREASIONO (BD) ======
                const isSiArea = data.area_siono === "Si";
                divComentario.style.display = isSiArea ? "block" : "none";

                if (!isSiArea) inputComentario.value = "";

                // Cuando el usuario cambia AREASIONO
                document.getElementById("areasiono").addEventListener("change", function () {
                    const isSi = this.value === "Si";
                    divComentario.style.display = isSi ? "block" : "none";

                    if (!isSi) inputComentario.value = "";
                });


                // ====== AREALIBERADA (BD) ======
                const isSiLiberada = data.areaLiberada === "Si";

                // Si alguno es SI → mostrar
                if (isSiLiberada || isSiArea) {
                    divComentario.style.display = "block";
                } else {
                    divComentario.style.display = "none";
                    inputComentario.value = "";
                }

                // Cuando el usuario cambia AREALIBERADA
                document.getElementById("areaLiberada").addEventListener("change", function () {
                    const isSi = this.value === "Si";

                    if (isSi) {
                        divComentario.style.display = "block";
                    } else {
                        // Solo ocultar si también es NO en areasiono
                        if (document.getElementById("areasiono").value !== "Si") {
                            divComentario.style.display = "none";
                            inputComentario.value = "";
                        }
                    }
                });


                // ============================================================

                // Lógica de visibilidad existente
                if (data.tipo_reporte === "Condicion locativa") {
                    $("#contenedorAreaLiberada").hide();
                    $("#descripcionno").hide();
                    $("#areasiono").val("No");
                    $("#descripcionno1").show();
                    $("#contenedorAreacorreccion").show();
                    $("#contenedorAreacorreccion").show();
                    $("#contenedorcomentarios").hide();
                   
                } 
                else if (data.tipo_reporte === "Rotura" || data.tipo_reporte === "Afectacion al Producto") {
                    $("#contenedorAreaLiberada").show();
                    $("#areaLiberada").val(data.areaLiberada);
                    $("#descripcionno").show();
                    $("#descripcionno1").hide();
                    $("#contenedorcomentarios").hide();
                    $("#contenedorAreacorreccion").hide();
                   
                } 
                else {
                    $("#contenedorAreaLiberada").hide();
                    $("#descripcionno").hide();
                    $("#descripcionno1").hide();
                    $("#contenedorAreacorreccion").hide();
                    $("#contenedorAreacorreccion").hide();
                   
                }
                
                contenedorImagen1.hide();
                
                // 2. Mostrar la segunda imagen (SOLO ESTA DEBE APARECER)
                contenedorImagen2.show(); 

                // ---------------------------------------------
                
                // Imagen 1
                const imgData1 = data.imagenLocativaUrl;
                const previewId1 = "#previewLocativa";
                const fileInputId1 = "#imagenLocativa";
                const clearBtnId1 = "#clearBtncondicionLocativa";

                if (imgData1) {
                    const imgTag = `<img src="${imgData1}" style="max-width: 100%; max-height: 100%;">`;
                    $(previewId1).html(imgTag);
                } else {
                    $(previewId1).html(`<span id="previewText" style="color:#6c757d;">Previsualización de Imagen</span>`);
                }
                
                $(fileInputId1).prop("disabled", true);
                $(clearBtnId1).prop("disabled", true).addClass("disabled");

                // Imagen 2 editable 🔓
                const imgData2 = data.imagenLocativa1Url;
                const previewId2 = "#previewLocativa1";

                if (imgData2) {
                    const imgTag = `<img src="${imgData2}" style="max-width: 100%; max-height: 100%;">`;
                    $(previewId2).html(imgTag);
                } else {
                    $(previewId2).html(`<span id="previewText1" style="color:#6c757d;">Previsualización de Imagen 2</span>`);
                }
                
                // Bloqueo de campos (tu lógica)
                $("#plantaroturacondi, #detalleReporte, #decripcionrotura, #nombreProceso, #nombreCalidad, #areasChequeo1")
                    .prop("readonly", true)
                    .prop("required", false);
                    
                $("#plantaroturacondi, #areasroturacondi, #detalleReporte, #nombreProceso, #nombreCalidad")
                    .prop("disabled", true);
                
                $("#preguntasRotura").find("input[type=checkbox]")
                    .prop("disabled", true);

                swal("Listo", "Datos cargados correctamente.", "success");
            } else {
                
                contenedorImagen1.hide();
                contenedorImagen2.show();

                $("#previewLocativa1").html(`<span id="previewText1" style="color:#6c757d;">Previsualización de Imagen 2</span>`);
                
                swal("Atención", "No se encontró un registro con ese ID", "warning");
            }
        },
        
        error: function(xhr) {
            console.error("Error AJAX:", xhr.responseText);
            swal("Error", "No se pudo cargar la información", "error");
        }
    });
} 
 
 
document.addEventListener("DOMContentLoaded", function() {
    const areaLiberada = document.getElementById("areaLiberada");
    const areasiono    = document.getElementById("areasiono");

 
    const contenedorImg1 = document.getElementById("contenedorImagenLocativa");   // IMAGEN ANTES
    const contenedorImg2 = document.getElementById("contenedorImagenLocativa1"); // IMAGEN DESPUÉS


    const fileInput1   = document.getElementById("imagenLocativa");
    const previewDiv1  = document.getElementById("previewLocativa");
    const base64Input1 = document.getElementById("base64condicionLocativa");


    const fileInput2   = document.getElementById("imagenLocativa1");
    const previewDiv2  = document.getElementById("previewLocativa1");
    const base64Input2 = document.getElementById("base64condicionLocativa1");


    window.cargandoDesdeBD = false; 

    // ===============================
    // FUNCIÓN QUE CONTROLA VISIBILIDAD
    // ===============================
    function actualizarImagenes(value) {

        if (cargandoDesdeBD) return; // ⛔ Proteger si viene de AJAX

        const isNo = value === "No";
        const isSi = value === "Si";

  
        contenedorImg1.style.display = (isSi || isNo) ? "block" : "none";

        if (!(isSi || isNo)) {
            fileInput1.value = "";
            previewDiv1.innerHTML = `<span style="color:#6c757d;">Previsualización de Imagen</span>`;
            base64Input1.value = "";
        }

        contenedorImg2.style.display = isSi ? "block" : "none";

        if (!isSi) {
            fileInput2.value = "";
            previewDiv2.innerHTML = `<span style="color:#6c757d;">Previsualización de Imagen 2</span>`;
            base64Input2.value = "";
        }
    }


    if (areaLiberada) {
        areaLiberada.addEventListener("change", function() {
            actualizarImagenes(this.value.trim());
        });
    }

    if (areasiono) {
        areasiono.addEventListener("change", function() {
            actualizarImagenes(this.value.trim());
        });
    }

});

/* ---------------------------------------------------------------------------------------------- */