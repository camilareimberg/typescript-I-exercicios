"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "2",
        email: "camila@gmail.com",
        password: "123"
    },
    {
        id: "3",
        email: "tiago@gmail.com",
        password: "12345"
    }
];
exports.products = [
    {
        id: "4",
        name: "arroz",
        price: 2,
        category: "comida"
    },
    {
        id: "5",
        name: "sabonete",
        price: 1,
        category: "limpeza"
    }
];
exports.purchases = [
    {
        userId: "2",
        productId: "4",
        quantity: 3,
        totalPrice: 7
    },
    {
        userId: "3",
        productId: "5",
        quantity: 3,
        totalPrice: 8
    }
];
const resultado = exports.purchases.reduce((acc, current) => acc + (current.quantity * current.totalPrice), 0);
console.log(resultado);
//# sourceMappingURL=database.js.map