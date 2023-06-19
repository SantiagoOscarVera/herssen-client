export const ProductServiceMpv1 = {
    getProductsData() {
        return [
            {
                id: '1007',
                artist: 'Harry Winston',
                name: 'Galaxy Earrings',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 56000,
                category: 'Jewelry',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                artist: 'Buccellati',
                name: 'Buccellati Earrings',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 40000,
                category: 'Jewelry',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1009',
                artist: 'Laurence Graff',
                name: 'Graff Earrings',
                description: 'Product Description',
                image: 'galaxy-earrings.jpg',
                price: 70000,
                category: 'Jewelry',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
        ];
    },

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};

