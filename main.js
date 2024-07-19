const API__PRODUCTS = "https://dummyjson.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".lds-ring")
const popap = document.querySelector(".popap")


console.log(API__PRODUCTS);
console.log(wrapper);

async function fetchProducts(api) {
    try {
        loading.style.display = "block"
        let respnonse = await fetch(`${api}/products`)
        console.log(respnonse);
        respnonse
                .json()
                .then((res)=> createCard(res))
                .catch((err)=> console.log(err)) 
                .finally(loading.style.display = "none"
                )     
    } catch (error) {
        console.log(error);
    }
}

fetchProducts(API__PRODUCTS)

function createCard(data) {
    data.products.slice(0,24)
    .forEach((product) => {
        console.log(data);
        console.log(product);
        let card = document.createElement("div")
        card.classList.add("card")
        console.log(card);
        card.innerHTML = `
            <img class="img" src="${product.thumbnail}" alt="foto">
            <div class="desc">
            <p  class="title">${product.title}</p>
            <p class="description">${product.description}</p>
            <p  class="price">Price: ${product.price}</p>
            <p  class="category">${product.category}</p>
            <div> 
            <button class="btn">Buy</button>
            </div>
            </div>

        `

        wrapper.appendChild(card)
    }
);
}


