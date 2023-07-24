import {getCiclistas, postCiclistas} from "../creyente/API.js";

document.addEventListener("DOMContentLoaded", iniciar);


//GET Ciclistas
async function iniciar(){
    const datos = await getCiclistas();
    const tablas = document.querySelector("#insert");
    console.log(datos);
    datos.forEach(element => {
        const {_id, nombre, edad, departamento, municipio, ministerio, nivelFormacion, nivelRuta} = element;
        tablas.innerHTML += `
            <tr>
                <td>${_id}</td>
                <th>${nombre} </th>
          <th>${edad} </th>
          <th>${departamento} </th>
          <th>${municipio} </th>
          <th>${ministerio} </th>
          <th>${nivelFormacion} </th>
          <th>${nivelRuta} </th>
  
             
            
        `
    });
}

//POST
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", datosPOST);

function datosPOST(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    const departamento = document.querySelector("#departamento").value;
    const municipio = document.querySelector("#municipio").value;
    const ministerio = document.querySelector("#ministerio").value;
    const nivelFormacion = document.querySelector("#nivelFormacion").value;
    const nivelRuta = document.querySelector("#nivelRuta").value;


    const Data = {
        nombre,
        edad,
        departamento,
        municipio,
        ministerio,
        nivelFormacion,
        nivelRuta
    }
    console.log(Data);

    if(validate(Data)){
        postCiclistas(Data);
        alert("Los datos se han ingresado satisfactoriamente");
        
    }else {
        alert("no pasa");
    }
} 
