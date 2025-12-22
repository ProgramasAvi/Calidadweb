// =======================================
// ESTADO GLOBAL
// =======================================
let checkboxStateGlobal = {}; // Estado global de todos los checkboxes
let aspectosPorCategoria = {};  
let estadoCategorias = {};
let porcentajeCategorias = {};
let observacionesCategorias = {};
let aspectosPorAreaIDs = {}; // key = idArea, value = array de todos los IDs de aspectos
let categoriasVisitadas = new Set();
let mapNombresAreas = {};
let mapNombresCategorias = {};
let mapNombresAspectos = {};

// =======================================
// FUNCIÓN AUXILIAR
// =======================================
function limpiarContenedoresAspectos() {
    const c1 = document.getElementById('contenedorAspectos');
    const c2 = document.getElementById('elementos-container');
    if (c1) c1.innerHTML = "";
    if (c2) c2.innerHTML = "";
}

// =======================================
// DOCUMENT READY
// =======================================
document.addEventListener("DOMContentLoaded", function () {
const BASE_PATH = window.location.hostname === "localhost" ? "/calidadweb" : "/CALIDADWEB/calidadweb";
    // ===============================
    // CARGAR ÁREAS
    // ===============================
    
  // fetch(`/calidadweb/models/datosAreas.php`) //--> local
  // fetch(`http://192.200.100.40:8002/CALIDADWEB1/calidadweb/models/datosAreas.php`) //--> servidor
    fetch(`${window.location.origin}${BASE_PATH}/models/datosAreas.php`)
    
        .then(res => res.json())
        .then(data => {
            const sel = document.getElementById('area');
            data.forEach(a => {
                mapNombresAreas[a.id] = a.areas;
                sel.innerHTML += `<option value="${a.id}">${a.areas}</option>`;
            });
            limpiarContenedoresAspectos();
            actualizarPorcentajeGlobal();
        });

    // ===============================
    // CAMBIO DE ÁREA
    // ===============================
    document.getElementById('area').addEventListener('change', function () {
        const idArea = this.value;
        const selCat = document.getElementById('categoria');

        limpiarContenedoresAspectos();
        selCat.innerHTML = `<option value="">-- Selecciona una categoría --</option>`;
        selCat.disabled = true;

        categoriasVisitadas.clear();
        porcentajeCategorias = {};
        observacionesCategorias = {};
        aspectosPorCategoria = {};   
        aspectosPorAreaIDs[idArea] = [];

        if (!idArea) {
            actualizarPorcentajeGlobal();
            return;
        }

        // ===============================
        // CARGAR TODAS LAS CATEGORÍAS Y ASPECTOS DEL ÁREA
        // ===============================
        
       // fetch(`/calidadweb/models/datosCategoriass.php?id_area=${idArea}`) // --> local
      //  fetch(`http://192.200.100.40:8002/CALIDADWEB1/calidadweb/models/datosCategoriass.php?id_area=${idArea}`) // --> servidor
            fetch(`${window.location.origin}${BASE_PATH}/models/datosCategoriass.php?id_area=${idArea}`)
            .then(res => res.json())
            .then(categorias => {
                // llenar select de categorías
                categorias.forEach(cat => {
                    mapNombresCategorias[cat.id] = cat.categoria;
                    selCat.innerHTML += `<option value="${cat.id}">${cat.categoria}</option>`;
                });
                selCat.disabled = false;

                // cargar aspectos de cada categoría y agregarlos al total de la área
                let promesas = categorias.map(cat => {
                    
                   // return fetch(`/calidadweb/models/datosAspectos.php?id_categoria=${cat.id}`)
                //  return fetch(`http://192.200.100.40:8002/CALIDADWEB1/calidadweb/models/datosAspectos.php?id_categoria=${cat.id}`)
                fetch(`${window.location.origin}${BASE_PATH}/models/datosAspectos.php?id_categoria=${cat.id}`)
                .then(res => res.json())
                        .then(aspectos => {
                            aspectos.forEach(a => {
                                const aspectoId = String(a.id);
                                mapNombresAspectos[aspectoId] = a.aspecto;
                                // Guardar solo una vez
                                if (!aspectosPorAreaIDs[idArea].includes(aspectoId)) {
                                    aspectosPorAreaIDs[idArea].push(aspectoId);
                                }
                            });
                        });
                });

                // cuando ya estén cargados todos los aspectos, actualizar porcentaje global
                Promise.all(promesas).then(() => {
                    actualizarPorcentajeGlobal();
                });
            });
    });

    // ===============================
    // CAMBIO DE CATEGORÍA
    // ===============================
    document.getElementById('categoria').addEventListener('change', function () {
        const id_categoria = this.value;
        const cont = document.getElementById('contenedorAspectos');

        limpiarContenedoresAspectos();
        if (!id_categoria) return;

        categoriasVisitadas.add(id_categoria);
        const idAreaActual = document.getElementById("area").value;

       // fetch(`/calidadweb/models/datosAspectos.php?id_categoria=${id_categoria}`)
       // fetch(`http://192.200.100.40:8002/CALIDADWEB1/calidadweb/models/datosAspectos.php?id_categoria=${id_categoria}`)
        fetch(`${window.location.origin}${BASE_PATH}/models/datosAspectos.php?id_categoria=${id_categoria}`)
            .then(res => res.json())
            .then(data => {
                const div = document.createElement('div');

                data.forEach(a => {
                    const aspectoId = String(a.id);

                    let checked = "";
                    if (aspectosPorCategoria[id_categoria] && aspectosPorCategoria[id_categoria][aspectoId] === true) {
                        checked = "checked";
                    }

                    const lbl = document.createElement('label');
                    lbl.style.display = "block";
                    lbl.style.marginBottom = "5px";

                    lbl.innerHTML = `
                        <input type="checkbox"
                               class="checkbox-categoria"
                               id="aspecto_${aspectoId}"
                               data-cat="${id_categoria}"
                               data-area="${idAreaActual}"
                               value="${aspectoId}"
                               ${checked}>
                        ${a.aspecto}
                    `;
                    div.appendChild(lbl);
                });

                // ===============================
                // PORCENTAJE CATEGORÍA
                // ===============================
                const pct = porcentajeCategorias[id_categoria] ?? "100.0";
                const pctDiv = document.createElement('div');
                pctDiv.style.marginTop = "30px";
                pctDiv.innerHTML = `
                    <label style="display:block; margin-bottom:4px; font-weight:bold;"> CUMPLIMIENTO CATEGORIA</label>
                    <input type="text"
                           readonly
                           class="input-pct-cat"
                           style="border:1px solid #ccc; border-radius:8px; padding:10px; width:100px; text-align:center; font-size:20px"
                           value="${pct}">
                `;
                div.appendChild(pctDiv);

                // ===============================
                // OBSERVACIONES
                // ===============================
                const obs = observacionesCategorias[id_categoria] ?? "";
                const obsDiv = document.createElement('div');
                obsDiv.style.marginTop = "10px";
                obsDiv.innerHTML = `
                    <label style="display:block; margin-bottom:4px; font-weight:bold;">OBSERVACIONES CATEGORIA:</label>
                    <textarea class="obs_categoria"
                              data-cat="${id_categoria}"
                              style="border:1px solid #ccc; border-radius:8px; padding:6px; width:100%; min-height:60px;">${obs}</textarea>
                `;
                div.appendChild(obsDiv);

                cont.appendChild(div);

                // ===============================
                // EVENTO CHECKBOXES
                // ===============================
                const checks = div.querySelectorAll(".checkbox-categoria");
                const inputPct = pctDiv.querySelector("input");

                checks.forEach(cb => {
                    cb.addEventListener("change", function () {
                        const aspectoId = this.value;
                        const idArea = this.dataset.area;

                        // Actualizar estado global
                        actualizarEstadoGlobal(aspectoId, this.checked, idArea);

                        // Guardar estado por categoría
                        if (!aspectosPorCategoria[id_categoria]) {
                            aspectosPorCategoria[id_categoria] = {};
                        }
                        aspectosPorCategoria[id_categoria][aspectoId] = this.checked;

                        actualizarEstadoCategoria(id_categoria);
                        actualizarPorcentajeCategoria(id_categoria, checks, inputPct);
                    });
                });

                // ===============================
                // EVENTO OBSERVACIONES
                // ===============================
                div.querySelector(".obs_categoria").addEventListener("input", function () {
                    observacionesCategorias[id_categoria] = this.value;
                });
            });
    });

    // ===============================
    // BOTÓN formAuditoriaProceso
    // ===============================
    document.addEventListener("click", function (e) {
        if (!e.target || e.target.name !== "formAuditoriaProceso") return;

        e.preventDefault();
        const form = e.target.closest("form");
        if (!form) return;

        const selArea = document.getElementById('area');
        if (selArea && selArea.value) {
            const id = selArea.value;
            const nombre = mapNombresAreas[id] ?? id;

            const old = form.querySelector('input[name="area"][type="hidden"]');
            if (old) old.remove();

            const h = document.createElement("input");
            h.type = "hidden";
            h.name = "area";
            h.value = nombre;
            form.appendChild(h);

            selArea.disabled = true;
        }

        const detalle = [];
        categoriasVisitadas.forEach(catId => {
            const nombreCat = mapNombresCategorias[catId] ?? (`ID ${catId}`);
            const aspectos = [];

            if (aspectosPorCategoria[catId]) {
                Object.entries(aspectosPorCategoria[catId]).forEach(([idAsp, val]) => {
                    if (val === true) {
                        aspectos.push(mapNombresAspectos[idAsp] ?? idAsp);
                    }
                });
            }

            let categoriaFinal = aspectos.length === 0 ? "categorias sin incumplimiento" : nombreCat;

            detalle.push({
                id: catId,
                categoria: categoriaFinal,
                porcentaje: porcentajeCategorias[catId] ?? "100.0",
                observaciones: observacionesCategorias[catId] ?? "",
                aspectos: aspectos
            });
        });

        let hJson = document.getElementById("detalle_categorias_json");
        if (!hJson) {
            hJson = document.createElement("input");
            hJson.type = "hidden";
            hJson.id = "detalle_categorias_json";
            hJson.name = "detalle_categorias_json";
            form.appendChild(hJson);
        }
        hJson.value = JSON.stringify(detalle);

        // Agregar flag
        let hFlag = form.querySelector('input[name="formAuditoriaProceso"]');
        if (!hFlag) {
            hFlag = document.createElement("input");
            hFlag.type = "hidden";
            hFlag.name = "formAuditoriaProceso";
            hFlag.value = "1";
            form.appendChild(hFlag);
        }

        form.submit();
    });
});

// =======================================
// FUNCIONES AUXILIARES
// =======================================
function actualizarEstadoCategoria(idCategoria) {
    const checks = document.querySelectorAll(`input[data-cat="${idCategoria}"]`);
    estadoCategorias[idCategoria] = [];
    checks.forEach(c => {
        if (c.checked) estadoCategorias[idCategoria].push(c.value);
    });
}

function actualizarPorcentajeCategoria(idCategoria, checks, input) {
    const total = checks.length;
    const marc = Array.from(checks).filter(c => c.checked).length;

    let pct = 100;
    if (total > 0) pct = 100 - (100 / total) * marc;
    if (pct < 0) pct = 0;

    pct = pct.toFixed(2);
    porcentajeCategorias[idCategoria] = pct;

    if (input) input.value = pct;

    actualizarPorcentajeGlobal();
}

// =======================================
// FUNCIÓN GLOBAL DE PORCENTAJE POR ÁREA
// =======================================
function actualizarPorcentajeGlobal() {
    const idAreaActual = document.getElementById("area")?.value;
    if (!idAreaActual) return;

    const listaAspectos = aspectosPorAreaIDs[idAreaActual] ?? [];
    const totalAspectos = listaAspectos.length;
    if (totalAspectos === 0) {
        document.getElementById("porcentaje").value = "100.0";
        return;
    }

    const valorCheck = 100 / totalAspectos;
    let porcentajeSeleccionados = 0;

    listaAspectos.forEach(aspectoId => {
        if (checkboxStateGlobal[`${idAreaActual}_${aspectoId}`]) {
            porcentajeSeleccionados += valorCheck;
        }
    });

    let porcentajeGlobal = 100 - porcentajeSeleccionados;
    if (porcentajeGlobal < 0) porcentajeGlobal = 0;
    document.getElementById("porcentaje").value = porcentajeGlobal.toFixed(1);
}

// =======================================
// ACTUALIZAR ESTADO GLOBAL
// =======================================
function actualizarEstadoGlobal(aspectoId, isChecked, idArea) {
    const key = `${idArea}_${aspectoId}`;
    checkboxStateGlobal[key] = isChecked;
    actualizarPorcentajeGlobal();
}
