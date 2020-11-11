function modificar() {
	console.log('Desde la funcion modificar');
	//obtener un elemento del dom
	let title = document.getElementById('titulo');
	console.log(title);
	console.log(title.id);
	console.log(title.className);

	//modificar el objeto
	title.className = 'text-danger display-4';
}

function desplegar() {
	let articulo = document.getElementsByTagName('article');
	console.log(articulo);
	console.log(articulo[0]); //1 - nodo padre
	let ocultar = document.getElementById('btnVerMenos');
    let parrafo = document.createElement('p');

	if (ocultar.innerText == 'ver mas'){
		//2- crear un elemento nuevo
		console.log(parrafo);

		parrafo.innerText =
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur suscipit quia quasi, ab omnis minima ipsam obcaecati beatae tenetur. Autem quisquam velit harum corrupti voluptatum inventore assumenda, asperiores ut illo reprehenderit. Libero praesentium harum amet sunt unde. Tenetur at consequuntur blanditiis illo? Omnis quod tempora accusamus error, ut non harum autem natus architecto sequi? Quaerat id facilis aliquam deleniti, quod dolorum, expedita voluptate animi officiis commodi fugit amet. Repellendus?';

		//3-agregar nodo hijo al padre
		articulo[0].appendChild(parrafo);
		ocultar.innerText = 'ver menos';
		ocultar.className = 'btn btn-warning';
	}else{
        //modificar texto del boton
        ocultar.innerText = 'ver mas';
        ocultar.className = 'btn btn-primary';

        //borrar elemento del dom
        if(articulo[0].hasChildNodes() && articulo[0].children.length > 2){
            //borrar elemento
            console.log( articulo[0].children[2]);
            // console.log( articulo[0].childNodes);
            console.log(parrafo);
            articulo[0].removeChild(articulo[0].children[2]);
        }
    }
}
function transformarAMayus(){
	let texto = document.getElementById("inputModificar").value; 
	console.log(texto.toUpperCase());
	
	let alerta = document.getElementById("alertModificar");
	// acceder a la clase del alert para sacar el d-none y que entonces ahora se lo vea!
	alerta.className = "alert alert-info";
	alerta.innerText = texto.toUpperCase();
}