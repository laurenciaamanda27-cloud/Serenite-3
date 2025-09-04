// Daftar produk (dummy 200 item)
const products = [];

for (let i = 1; i <= 200; i++) {
  products.push({
    name: "Product " + i,
    price: (Math.random() * 200 + 20).toFixed(2), // harga random 20–220
    image: `https://via.placeholder.com/300x400?text=Product+${i}`
  });
}

// Render produk ke dalam #product-grid
const productGrid = document.getElementById("product-grid");

products.forEach(product => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");
  
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;
  
  productGrid.appendChild(productCard);
});
async function fetchProducts(category = 'all') {
    try {
        // Tambahkan kelas fade-out untuk mulai animasi hilang
        productListEl.classList.add('fade-out');

        // Tunggu animasi fade-out selesai (500ms)
        await new Promise(resolve => setTimeout(resolve, 500));

        // Fetch produk
        const res = await fetch('/api/products/' + category);
        if (!res.ok) throw new Error('Failed to fetch products');
        const products = await res.json();

        // Render produk baru
        renderProducts(products);

        // Hapus kelas fade-out untuk fade-in
        productListEl.classList.remove('fade-out');
    } catch (error) {
        productListEl.innerHTML = '<p style="color:red; text-align:center;">Error loading products.</p>';
        console.error(error);
    }
}