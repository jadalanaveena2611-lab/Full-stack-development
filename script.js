
const products = [
  {
    name: "Headphones",
    price: 999,
    image: "https://placehold.co/300x200?text=Headphones"
  },
  {
    name: "Smart Watch",
    price: 1499,
    image: "https://placehold.co/300x200?text=Smart+Watch"
  },
  {
    name: "Laptop Bag",
    price: 799,
    image: "https://placehold.co/300x200?text=Laptop+Bag"
  }
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  image.loading = "lazy";

  const name = document.createElement("h3");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `Price: ₹${product.price}`;

  const button = document.createElement("button");
  button.textContent = "Add to Cart";

  button.addEventListener("click", () => {
    alert(`${product.name} added to cart!`);
  });

  card.append(image, name, price, button);
  productList.appendChild(card);
});
