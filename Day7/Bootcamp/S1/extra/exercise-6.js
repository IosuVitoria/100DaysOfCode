const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (const product of products) {
    if(product.sellCount>20){
        let name = product.name;
        goodProducts.push(name);
    }else{
        let name2 = product.name;
        badProducts.push(name2);
    }
}

console.log(badProducts);
console.log(goodProducts);