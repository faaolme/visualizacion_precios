
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

let purchases = []

const products = [
    {
        id: 1,
        title: "Mezcla original 200 g ¥ 500",
        price: 500
    },
    {
        id: 2,
        title: "Mezcla original 500 g  ¥ 900",
        price: 900
    },
    {
        id: 3,
        name: "Mezcla especial 200 g ¥ 700",
        price: 700
    },
    {
        id: 4,
        name: "Mezcla especial 500 g, 1.200 yenes",
        price: 1200
    }
]



function calc() {
    let sum = subtotal();
    let shippingFee = calcPostageForPurchase(sum);

    alert(`
    ${display()}
    El subtotal es: ${sum}
    El coste de envio es: ${shippingFee}
    El total es de ${sum + shippingFee} yenes
    `)
    purchases = [];
    priceElement.value = '';
    numberElement.value = '';
}


function calcPostageForPurchase(sum) {
    if (sum == 0 || sum >= 3000) {
        return 0;
    } else if (sum < 1000) {
        return 500;
    } else {
        return 250;
    }
}

function add() {
    console.log("Este es un mensaje desde la funcion add")
    const productId = parseInt(numberElement.value);
    const product = products.find(item => item.id == productId);
    const number = parseInt(numberElement.value);

    const purchase = {
        product,
        number
    }

    console.log(purchase)
    // calc the existing purchase
    const existingPurchase = purchases.find(item => item.product.id === purchase.product.id);
    
    if (existingPurchase) {
        existingPurchase.number += number;
    } else {
        purchases.push(purchase)
    }

    console.log({purchases})

    alert(`${display()}\nsubtotal ${subtotal()} yenes\n`)
}

function display() {
    // TODO
    return purchases.map(item => {
        return `${item.product.price} yenes por ${item.number} items`
    }).join("\n")
}

function subtotal() {
    return purchases.reduce((prev, purchase) => {
        return prev + purchase.product.price * purchase.number;
    }, 0)
}
