function filterProducts(category) {

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const productCategory =
            product.dataset.category;

        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        if (name.includes(search)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


function toggleMenu() {

    const nav =
        document.querySelector("nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "72px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "white";
        nav.style.padding = "20px";
        nav.style.flexDirection = "column";
        nav.style.borderBottom = "1px solid #ddd";

    }

}
