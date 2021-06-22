// récupération id

const queryStringUrlId = window.location.search
const itemId = queryStringUrlId.slice(1)
console.log(itemId);

// affichage du produit via fetch

//`http://localhost:3000/api/cameras/${itemId}`

function getSelected() {
    return fetch('http://localhost:3000/api/cameras/${itemId}')
        .then(function(httpBodyResponsonse) {
            return httpBodyResponsonse.json()
        })
        .then(function(selectedCamera) {
            return selectedCamera
        })
        .catch(function(error) {
            alert(error)
        })
}

const positionElement = document.querySelector('.container-page-produit')

//Structure HTML

const structureProduit =
    `

<div class="product__card">
                <h3 class="nameandprice" >${selectedCamera.name}</h3>
                <p class="productdescription">${camera.description}</p>
                <div class="linebreak"></div>
                <h4 class="nameandprice">${camerasPrices(camera.price)} €</h4>
                <p>${camera.lenses}</p>
                <div class="buttonsProduct">
                    <button class="buttonProduct addBasket">Ajouter au panier</button>
                    <button class="buttonProduct checkProduct">Voir Le produit</button>
                </div>
                <img class="camera__img" src="${camera.imageUrl}" alt="Photos de d'appereils photos">
            </div>

`

//injectiondu html

positionElement.innerHTML = structureProduit