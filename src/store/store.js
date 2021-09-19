import { writable } from "svelte/store";

export const products = writable([
    {
        id: 1,
        name: "Grumpy Red Curry",
        price: 24,
        image: "https://images.unsplash.com/photo-1631671608525-07c5479fd5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Chocolate Poop with Pomegranate",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1631671608597-36f59e7df460?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    },
    {
        id: 3,
        name: "Airly Cheddar Cracker",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1631671608439-6fb3b561c879?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
])