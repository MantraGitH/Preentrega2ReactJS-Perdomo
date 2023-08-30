

const products = [
    { id: "1", name: "Canguro Azul", price: 800, category: "buzosycanguros",},
    { id: "2", name: "Canguro Negro", price: 800, category: "buzosycanguros"},
    { id: "3", name: "Pantalon Cargo Negro", price: 1200, category: "pantalones"},
    { id: "4", name: "Pantalon Cargo Verde", price: 1200, category: "pantalones"},
    { id: "5", name: "Zapatillas Converse Negras y Blancas", price: 1500, category: "calzados"},
    { id: "6", name: "Zapatillas Converse Negras y Rojas", price: 1500, category: "calzados"},
];

export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const product = products.find((p) => p.id === id);

            if (product) {
                resolve(product);
            } else {
                reject("este producto no existe");
            }

        }, 1000);
    })
};

export const getProducts = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() => {

            const productsFiltered = category ? products.filter(product => product.category === category)
            : products;
            resolve(productsFiltered);

        }, 1000)
    })
}