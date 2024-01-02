function fetchData() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://dummyjson.com/products", true);

        xhr.onload = function () {
            if (xhr.status == 200) {
                try {
                    var response = JSON.parse(xhr.responseText);

                    if (Array.isArray(response.products)) {
                        resolve(response.products);
                    } else {
                        reject("Vale formaat: Oodati massiivi, kuid saadi: " + typeof response.products);
                    }
                } catch (error) {
                    reject("Viga parsimisel: " + error.message);
                }
            } else {
                reject("Päring ebaõnnestus. Staatus: " + xhr.status);
            }
        };

        xhr.send();
    });
}

function displayProducts(products) {
            var productContainer = document.getElementById("product-container");

            // Võtan ainult esimesed 10 toodet
            var firstTenProducts = products.slice(0, 10);

            firstTenProducts.forEach(function (product) {
                var cardHtml = `
                    <div class="col-md-4">
                        <div class="card mb-2 box-shadow">
                            <img class="card-img-top" src="https://pcbros.tech/cdn/shop/products/PXL_20220407_135813056.PORTRAIT.jpg?v=1649355485&width=3979" alt="${product.name}">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">${product.price}</span>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Lisa ostukorvi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                productContainer.innerHTML += cardHtml;
            });
}


document.addEventListener("DOMContentLoaded", function () {
    fetchData()
        .then((products) => {
            return displayProducts(products);
        })
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error("Viga:", error);
        });
});
