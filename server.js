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