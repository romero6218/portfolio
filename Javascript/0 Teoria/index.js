async function obtenerData() {
    await fetch("http://localhost:5500/data.json")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Solicitud eror", error));

}

obtenerData();

async function obtenerDatos() {
    let response = await fetch("http://localhost:5500/data.json");
    let json = await response.json();
    console.log(json);
}

obtenerDatos();