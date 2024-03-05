document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({

        items: [
            { Id: 1, name: Book1, Img: '1.jpg', price: 25000 },
            { Id: 2, name: Book2, Img: '2.jpg', price: 25000 },
            { Id: 3, name: Book3, Img: '3.jpg', price: 25000 },
        ]
    }));
});