main()

async function main() {
    const cameras = await getCameras()
    console.log(cameras)
    for (let i = 0; i < cameras.length; i++) {
        const camera = cameras[i];
        displayCamera(camera)
    }
}

function getCameras() {
    return fetch('http://localhost:3000/api/cameras')
        .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
        })
        .then(function(cameras) {
            return cameras
        })
        .catch(function(error) {
            alert(error)
        })
}

function displayCamera(camera) {
    const templateElt = document.getElementById('templateCamera')
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById('product__name').textContent = camera.name
    cloneElt.getElementById('description__product').textContent = camera.description
    cloneElt.getElementById('product__price').textContent = camera.price
    cloneElt.getElementById('product__lens1').textContent = camera.0
    cloneElt.getElementById('product__lens2').textContent = camera.1
    cloneElt.getElementById('product__lens3').textContent = camera.2


    document.getElementById('main').appendChild(cloneElt)
}
