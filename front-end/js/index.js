main()

async function main() {
    const cameras = await getCameras()

    for (camera of cameras) {
        displayCameras(camera)
    }
}
// Fetch ******************************************************

function getCameras() {
    return fetch('http://localhost:3000/api/cameras')
        .then(function(httpBodyResponsonse) {
            return httpBodyResponsonse.json()
        })
        .then(function(cameras) {
            return cameras
        })
        .catch(function(error) {
            alert(error)
        })
}

// Display ******************************************************
function displayCameras(camera) {
    document.getElementById('listeProduit').innerHTML +=
        `
        <a href="/front-end/HTML/pageproduits.html?${camera._id}">
            <div class="product__card">
                <h3 class="nameandprice" >${camera.name}</h3>
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
        </a>

        `

}


function camerasPrices(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Panier ***********************************************************