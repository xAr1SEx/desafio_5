// let texto = prompt("ESCRIBE UN TEXTO")
// let parrafo = document.createElement("p");
// parrafo.innerHTML = texto
// document.body.append(parrafo)
let nombre = document.getElementById("nombre")
let autor = document.getElementById("autor")
let precio = document.getElementById("precio")
let ingresar = document.getElementById("ingresar")
let table = document.getElementById("table")
let tableBody = document.getElementById("table-body")
let index = 0;
ingresar.addEventListener(`click`, () => {
index++; 
let fila = document.createElement("tr")
fila.setAttribute('id',index)
fila.innerHTML = `<td>${nombre.value}</td>
<td>${autor.value}</td>
<td>${precio.value}</td>
<td><button onclick=eliminar(${index})>eliminar</button></td>`
tableBody.appendChild(fila);
     console.log(nombre.value)
     console.log(autor.value)
     console.log(precio.value)
})


const eliminar = (id) => {
     console.log(id)
     let remover = document.getElementById(id)
     remover.remove();
}
