/* 
let id = 3;
let title;
let price;
let description;
let category;
let image;
let rating;
let rate;
let count;

let container_3 = document.getElementById("container_3");
let cuerpoContainer = container_3.getElementsByClassName("card");

localStorage.setItem("productos", producto);
localStorage.setItem("id", id);
container_3.innerHTML = ` 

`;
 */

/* let producto = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
};
 */


//producto=null;
/*
function getProducto() {
    return new Promise((resolve, reject) => {
        if (producto == null) {
            reject(new Error("Producto no existe"));
        }//if==null

        setTimeout(() => {
            resolve(producto);
        }, 5000);
    });//new Promise
}//get Producto //console.log(producto);

function getProducto() { //con fetch
    let promesa = fetch("https://fakestoreapi.com/products", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then((prods) => {
            //crear cards (prods)
            console.log("prods=>json()");
            console.log(prods);
        }//prods
        )//then json
            .catch((err) => {
                console.error("Error en el formato de la respuesta"+err.message);
            });//catch json
    }//resonance
    )//then
    .catch((err) => {
        console.error("Error en la respuesta"+err.message);
    });//catch promesa



}//getProducto

getProducto();
     .then((prod) => console.log(prod)) // then es cuando lo resuelves
    .catch((err) => console.log(err.message)); // catch es para cuando hay un reject
 */

/* 

//Modal
/* <div class="modal fade" id="exampleModal_S{prod.id}"
tabindex="-1" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h1 class="modal-title fs-5" id="exampleModalLabel">S{prod.title}</h1>
<button type="button" class="btn-close"
data-bs-dismiss="modal" aria-label="Close"></button>

 


        let elemento=`{
            "id":${id},
            "title":"${txtNombre.value}",
            "price":"${txtNumber.value}",
            "description":"${precio}",
            "category":"${precio}",
            "image":"${precio}",
            "rating":"${precio}",
            "rate":"${precio}",
            "count":"${precio}",
        }`;

        */


        let cardGroup = document.getElementsByClassName("row");


function getProducto(){
    let promesa = fetch("https://fakestoreapi.com/products",{
        method: "GET"
    });
    promesa.then( (response) => {
        response.json().then( (prods) => {
            prods.forEach(element => {
                let html= 
                    `<div class="col">
                        <div class="card h-350">
                            <img src=${element.image} class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class ="card-text">${element.description}</p>
                                    <button type="button" class="btn btn-primary">Primary</button>
                                </div>
                        </div> 
                    </div>`;
                cardGroup[0].insertAdjacentHTML("beforeend", html);
            });
        })//then json
        .catch( (err) => {
            console.error("Error en el formato de productos");
        });//catch json
    })//then response
    .catch( (err) => {
        console.error("Error en la respuesta de API");
    });
}
getProducto();
